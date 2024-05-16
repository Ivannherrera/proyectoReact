import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
import "./css/main.css"


function App() {

  return (
    <>
  <NavBar/>
  <div className="prop"><ItemListContainer greeting= "Bienvenidos a DecoGR"/></div>
    </>
  )
}

export default App
