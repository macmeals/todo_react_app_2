import logo from "./logo.svg"
import "./App.css"
import { Router } from "./router/Router"
import { BrowserRouter } from "react-router-dom"

export const App = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  )
}
