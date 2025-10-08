import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from "./pages/Homepage";
import Layout from './components/Layout';
import About from './pages/About';
import Products from './pages/Products';
import ProductsDetail from './pages/ProductsDetail'; 
import {BudgetProvider, default as BudgetContext} from "./contexts/BudgetContext";


function App() {
  return (
    <>
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
        {/* genitore principale: Layout contiene tutte le pagine */}
        <Route path="/" element={<Layout />}>
          {/* route di default */}
          <Route index element={<Homepage />}/>
          <Route path="about" element={<About />}/>
          {/* genitore secondario: products con i figli */}
          <Route path='products'>
          <Route path="/products" element={<Products />} />
            {/* figlio dinamico di products */}
            <Route path="/products/:id" element={<ProductsDetail />} />
          </Route>
        </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
    </>
  )
}
export default App
