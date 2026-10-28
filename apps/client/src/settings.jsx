import { createContext, useContext, useEffect, useState } from 'react'

const DEFAULTS = { pieceLook: 'glyph' }
const STORAGE_KEY = 'deckchess-settings'

const SettingsContext = createContext(null)

function loadSettings() {
    try {
        return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(STORAGE_KEY)) }
    } catch {
        return DEFAULTS
    }
}

export function SettingsProvider({ children }) {
    const [settings, setSettings] = useState(loadSettings)

    useEffect(() => {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
        } catch {
            // Private windows can block storage; the setting just won't survive a reload.
        }
    }, [settings])

    const update = (key, value) => setSettings(current => ({ ...current, [key]: value }))

    return <SettingsContext value={{ settings, update }}>{children}</SettingsContext>
}

export function useSettings() {
    return useContext(SettingsContext)
}