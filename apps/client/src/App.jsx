import { useState } from 'react'
import MainMenu from './screens/MainMenu.jsx'
import RulesScreen from './screens/RulesScreen.jsx'

function App() {
  const [screen, setScreen] = useState('menu')

  if (screen == 'rules') {
    return <RulesScreen onBack={() => setScreen('menu')} />
  }

  return <MainMenu onNavigate={setScreen} />
}

export default App