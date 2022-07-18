import './App.css';
import Product from "./components/Product"
import {useState} from "react";

function App() {

  const defaultData = [
    {id:0,title:"Purse",category:"clothing",price:500},
    {id:1,title:"Casio watch",category:"accessories",price:120},
    {id:2,title:"T-Shirt",category:"clothing",price:25},
    {id:3,title:"hoodie",category:"clothing",price:60},
    {id:4,title:"iphone",category:"technology",price:60},
    {id:5,title:"Standing desk",category:"stationary",price:175},
    {id:6,title:"Apple monitor",category:"technology",price:175}
  ]

  // Products
  const productsLocalStorage = JSON.parse(localStorage.getItem('products'));
  console.log(productsLocalStorage);

  // Shorthand for if statement (if productsLocalStorage is null or is an empty array, then defaultData else productsLocalStorage)
  const [products, setProducts] = useState(productsLocalStorage === null || productsLocalStorage.length === 0 ? defaultData : productsLocalStorage);

  // The state can only be edited by telling it what the new state should be, this means it has to take the whole "old" array and then filter to find if it DOESNT match the ID, return true, to add the whole remaining array except the one that did not pass
  function removeProduct(id) {
    const arr = products.filter(product => product.id !== id)

    
    // This would automatically return all the deleted items if none are remaining.
    // if (arr.length > 0) {
      //   setProducts(arr)
      //   localStorage.setItem('products', JSON.stringify(arr));
      // } else {
        //   setProducts(defaultData)
        //   localStorage.setItem('products', JSON.stringify(defaultData));
        // }
        
    setProducts(arr)
    localStorage.setItem('products', JSON.stringify(arr));
  }

  return (
    <div className="App">
      <h1 className="heading">Products Page</h1>

      {products.map(product => {
        return (
          <Product
          id={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          key={product.id}
          removeProduct={removeProduct}
        />)
      })}
    </div> 
  );
}

export default App;
