import "./app.scss"
import Dock from "./components/Dock"
import Nav from "./components/Nav"
import MacWindows from "./components/windows/MacWindows"

function App() {

  return (
   <main>
    <Nav />
    <Dock />
    <MacWindows />
   </main>
  )
}

export default App
