import { useState } from 'react'
import MainMenu from './screens/MainMenu.jsx'
import RulesScreen from './screens/RulesScreen.jsx'
import SettingsScreen from './screens/SettingsScreen.jsx'
import GameScreen from './screens/GameScreen.jsx'

function App() {
  const [screen, setScreen] = useState('menu')

  if (screen == 'rules') {
    return <RulesScreen onBack={() => setScreen('menu')} />
  }
  if (screen == 'settings') {
    return <SettingsScreen onBack={() => setScreen('menu')} />
  }
  if (screen == 'online') {
    return <GameScreen onBack={() => setScreen('menu')} />
  }
  if (screen == 'bot') {
    return <GameScreen onBack={() => setScreen('menu')} />
  }

  return <MainMenu onNavigate={setScreen} />
}

export default App