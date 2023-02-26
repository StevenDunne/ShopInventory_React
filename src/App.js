import './App.css';
import { addStock } from './store/stock';
import StockTable from './Components/StockTable';
import StockInput from './Components/StockInput';
import { useEffect, useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  //used to see when redux gets a new shoe, then triggers the updateStock function for local storage
  const shoe = useSelector((state) => state.shoe)
  //this is used for re-rendering the table when a new item is added
  let [reRenderCheck, setRenderCheck] = useState(0)
  // let stockList = [{name: 'vans', upc: 11, quantity: 8, cost: 40, price: 80}, {name: 'converse', upc: 9, quantity: 3, cost: 40, price: 80}]
  let stockList = []

  //on load we check if they have local storage, if not, set it up
  function onLoad() {
    if (window.localStorage.getItem('stock')){
      console.log('stock found')
      stockList = JSON.parse(window.localStorage.getItem('stock'))
    }
    else {
      window.localStorage.setItem('stock', JSON.stringify(stockList))
      console.log('no stock found, created local storage')
      console.log(shoe)
    }
  }

  //stocklist array now becomes whatever is in our local storage, we push the new shoe object into the array
  //and then replace it back into the localstorage as the new version

  function updateStock() {
    // Parse the serialized data back into an aray of objects
    stockList = JSON.parse(localStorage.getItem('stock')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    console.log('this is the shoe name' + shoe.name)
    if (shoe.name !== ''){
    stockList.push(shoe);}
    else (
      console.log('Shoe reject for blank name')
    )
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('stock', JSON.stringify(stockList));
    //force rerender of table
    setRenderCheck(reRenderCheck + 1)
  }

  function clearStorage() {
    window.localStorage.clear()
    console.log(alert('Local storage is cleared'))
    window.location.reload()
  }
 
  //on app load - find or set local storage - empty array only runs once at loadup
  useEffect(onLoad, [])
  //retrrigger render when state of shoe changes
  useEffect(updateStock,[shoe])

  
  return (
    <div className="App">
      <header>
      <h1>Steve's Store Stock</h1>
      </header>
    
      <div className='buttonsContainer'>
        
        <StockInput />
      </div>
      <StockTable render={reRenderCheck} />

      <button type='button' onClick={clearStorage} >clear localStorage</button>
    </div>
  );
}

export default App;
