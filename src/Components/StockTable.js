

export default function StockTable (props) {
    //init array
    let stockArray = []
    let render = props.render
    console.log('the render prop count is' + render)
    //this prevents a return of null on the localstorage during first use
    if(render > 0){
    stockArray = JSON.parse(window.localStorage.getItem('stock'))
    }

    //this edit function gathers the data the user wants to edit, and calls another function with that data to make the change
    function editProduct (e) {
        let targetList = e.target.offsetParent.parentNode.children
        let dataToEdit = Number(prompt('Which field would you like to edit?\n1-Name\n2-UPC\n3-Quantity\n4-Cost\n5-Price'))
        let newValue = prompt('What is the new value?')
        //upc of target product
        let upcToEdit = targetList[1].innerHTML
        console.log(e)
        console.log(targetList)
        targetList[2].innerHTML = dataToEdit
        editStock(upcToEdit, dataToEdit, newValue)
        
    }
    //this function actually edits the stock list in storage
    function editStock (upc, dataToEdit, newValue){
        let currentStockArray = JSON.parse(window.localStorage.getItem('stock'))
        for(let i=0; i<currentStockArray.length;i++){
            if (currentStockArray[i].upc === upc){
            //  currentStockArray[i].name = newValue
            switch(dataToEdit){
                case 1:
                    currentStockArray[i].name = newValue;
                    break;
                case 2: 
                    currentStockArray[i].upc = newValue;
                    break;
                case 3: 
                    currentStockArray[i].quantity = newValue;
                    break;
                case 4: 
                    currentStockArray[i].cost = newValue;
                    break;
                case 5: 
                    currentStockArray[i].price = newValue;
                    break;
                default:
                    console.log('switch didnt work')
                    break;

            }
            }
         }
        localStorage.setItem('stock', JSON.stringify(currentStockArray))
        window.location.reload()
    }

    let mappedStock = stockArray.map(product =>{
        return <tr className="tableRow">
            <td>{product.name}</td>
            <td>{product.upc}</td>
            <td>{product.quantity}</td>
            <td>{product.cost}</td>
            <td>{product.price}</td>
            <td><button type="button" onClick={editProduct} id='editBtn'>Edit</button></td>
            </tr>
            }
            )
    
   
    return(
        <div className="tableContainer">
            <table>
                <thead>
                    <td>Name</td>
                    <td>UPC</td>
                    <td>Quantity</td>
                    <td>Cost</td>
                    <td>Price</td>
                </thead>
                <tbody id="tableBody">
                    {mappedStock}
                </tbody>
            </table>
        </div>
    )
}