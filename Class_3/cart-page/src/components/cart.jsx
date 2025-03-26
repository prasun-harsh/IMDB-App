import {useState} from "react"
import Counter from "./counter";
const Cart = ()=>{
    const [products,setProducts] = useState([
        {id :'1',name : 'Product 1',price : 100, quantity : 1},
        {id :'2',name : 'Product 2',price : 150, quantity : 2},
        {id :'3',name : 'Product 3',price : 200, quantity : 4},
    ])

    const handleCheckOut = ()=>{
        console.log(products)
    }
    const handleQuantiyChange = (id,quantity)=>{
        console.log('ProductId :',id,'Quantity Change', quantity)
        const updatedProduct = products.map(product=>{
            return product.id === id ? {...product,quantity: quantity} : product
        })
        setProducts(updatedProduct)
    }
    return(
        <div>
            <ul>
                {products.map((product, index) => (
                        <li key={index}>
                            {product.name} - Rs. {product.price} <Counter productId={product.id} quantity = {product.quantity} onUpdate ={handleQuantiyChange} />
                        </li>
                ))}
            </ul>
            <button onClick={handleCheckOut}>Check Out</button>
        </div>
    )
}

export default Cart;