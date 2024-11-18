import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import "./utils/i18n"


function App() {
  const [count, setCount] = useState(0)
  const { t } = useTranslation()
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> 
      <h1>I can use "Trans" also</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {t("Welcome_one", {
            count: count
          })}
        </p>
      </div>
      <p className="read-the-docs">
        {t("Welcome_one",{
          count : count
        })}
      </p>
    </>
  )
}

export default App
