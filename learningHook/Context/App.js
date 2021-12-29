import { useState, createContext } from 'react'
import Content from './content/Content'
import './App.css'

export const ThemeContext = createContext()

// Mounted and Unmounted
function App() {

  const [theme, setTheme] = useState('dark')//false là sai nên ở dưới có cái hàm so sánh nên nó sẽ là False nên ko render ra

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={theme}>
      <div className="App" style={{ padding: 20 }}>
        <button onClick={() => {
          toggleTheme()
        }}>Toggle</button>

        {<Content />}

      </div>
    </ThemeContext.Provider>

  );
}

export default App;
