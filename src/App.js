import './App.css';
import { Navbar } from './components/Navbar';
import { ItemDetailContainer } from './components/itemDetailContainer';
import { ItemListContainer } from './components/itemListContainer';
import { Routes, Route} from 'react-router-dom';

function App() {

  return(
    <>
    <Navbar />
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/category/:id' element={<ItemListContainer />} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
      </Routes>
    </main>
    </>
  )
}

export default App;
