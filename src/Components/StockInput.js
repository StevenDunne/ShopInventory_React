import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import {createShoe} from "../store/shoe"


function StockInput () {
    let currentStock = JSON.parse(localStorage.getItem('stock'))
    const [product, createProduct] = useState([])
    const dispatch = useDispatch()
    const stockArray = useSelector((state) => state.shoe)

    function saveItem() {
        let name = document.getElementById('itemName').value
        let upc = document.getElementById('itemUPC').value
        let quantity = document.getElementById('itemQuantity').value
        let cost = document.getElementById('itemCost').value
        let price = document.getElementById('itemPrice').value
        let array = {name: name, upc: upc, quantity: quantity, cost: cost, price: price}
        //check upc is unique
        for(let i=0; i<currentStock.length;i++){
            if (currentStock[i].upc === upc){
             alert('upc must be unique')
             return
            }
         }
        //check all fields have an entry, normally would use 'required' in inputs but we arent using a form submit
        if (!name || !upc || !quantity || !cost || !price){
            alert('all fields need a value')
        }
        //then we're good - submit to redux and clear input fields
        else {  
        dispatch(createShoe(array))
        document.getElementById('itemName').value = '';
        document.getElementById('itemUPC').value = ''
        document.getElementById('itemQuantity').value = ''
        document.getElementById('itemCost').value = ''
        document.getElementById('itemPrice').value = ''}
        console.log(array)
        }

    function displayItem () {
        console.log(stockArray)
    }

    return(
        <div className="stockInputContainer">
            <label>Name:<input id="itemName" type='text'></input></label>
            <label>UPC:<input id="itemUPC" type='number'></input></label>
            <label>Quantity:<input id="itemQuantity" type='number'></input></label>
            <label>Cost:<input id="itemCost" type='number'></input></label>
            <label>Price:<input id="itemPrice" type='number'></input></label>       
            <button type="button" onClick={saveItem}>Add to Stock</button>
            {/* <button type="button" onClick={displayItem}>Latest Shoe</button> */}
        </div>
    )
}
export default StockInput