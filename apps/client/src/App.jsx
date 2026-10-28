import { useState } from 'react'
import MainMenu from './screens/MainMenu.jsx'
import RulesScreen from './screens/RulesScreen.jsx'
import SettingsScreen from './screens/SettingsScreen.jsx'

function App() {
  const [screen, setScreen] = useState('menu')

  if (screen == 'rules') {
    return <RulesScreen onBack={() => setScreen('menu')} />
  }
  if (screen == 'settings') {
    return <SettingsScreen onBack={() => setScreen('menu')} />
  }

  return <MainMenu onNavigate={setScreen} />
}

export default App