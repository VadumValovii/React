import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import AddProduct from './components/AddProduct/AddProduct';
import EditProduct from './components/EditProduct/EditProduct';


function App() {

  const [title , setTitle] = useState("Hello, world");
  const [products,setProducts]=useState([
    {id:1,title:'Product 1',price:899},
    {id:2,title:'Product 2',price:983},
    {id:3,title:'Product 3',price:850},
    {id:4,title:'Product 4',price:930},
    {id:5,title:'Product 5',price:780}
  ]);

  const clickMe=()=>{
    setTitle('Title is change');
    console.log("It's clicked! ");
  }

  const deleteProduct=(productId)=>{
    const newProduct =products.filter(product=>product.id !== productId);
    setProducts(newProduct);
  }

  return ( 
    <div>
      <Header/>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductList products={products} deleteProduct={deleteProduct}/>} >
            </Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/contact' element={<Contact/>}></Route>
            <Route path='/add' element={<AddProduct/>}></Route>
            <Route path='/edit/:id' element={<EditProduct/>}></Route>

          </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
