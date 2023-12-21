import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


const App = () => {
  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting={'Hola Skater, que estas buscando ?'}/>
    </div>
  )
}

export default App


