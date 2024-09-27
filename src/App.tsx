import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { useEffect, useState } from 'react';
import { ThemeContext } from './context/Theme';
import { PortfolioDataContext, defaultValue } from './context/User';
import { Projects } from './pages/Projects';
import "./App.css"
import { Skills } from './pages/Skills';

function App() {
  // Initialize the theme state
  const [theme, setTheme] = useState<string>(() => {
    console.log('App effect')
    const storedTheme = window.localStorage.getItem("pref_theme");
    return storedTheme ? storedTheme : "dark"; // Default to "dark" if null
  });

  useEffect(() => {
    window.localStorage.setItem("pref_theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <PortfolioDataContext.Provider value={defaultValue}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/skills' element={<Skills />}></Route>
            <Route path='/*' element={<div>404 | Page Not Found</div>} />
          </Routes>
        </PortfolioDataContext.Provider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
}

export default App;
