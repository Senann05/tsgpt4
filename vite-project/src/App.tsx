import ThemeSwitcher from './context/ThemeSwitcher'


import { ThemeProvider } from './context/Provider'

function App() {

  return (
    <ThemeProvider>
      <ThemeSwitcher/>
    </ThemeProvider>
  )
}

export default App
