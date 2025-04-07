import { useState } from 'react'
import './App.css'

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [quantity,setQuantity] = useState('')
    const [comment,setComment] = useState('')
    const[shipping,setShipping] = useState('')




    const handleName=(e)=>{
      setName(e.target.value)
    }

    const handleQuantity=(e)=>{
      setQuantity(e.target.value)
    }

    const handleComment=(e)=>{
      setComment(e.target.value)
    }

    const handleShipping=(e)=>{
        setShipping(e.target.value)
    }

  return (
    <>
      <div>


      <h1>Vite + React</h1>

          {/*Number onChange*/}
          <h2>Count: {count} </h2>
        <button onClick={() => setCount((count) => count + 1)}>Increment</button><br/>
          <button onClick={() => setCount(0)}>Reset</button><br/>
          <button onClick={() => setCount((count) => count - 1)}>Decrement</button><br/>

          {/*text onChange*/}
          <input type="text" value={name} onChange={handleName} placeholder="Enter Name" /><br/>
          <button onClick={()=>{setName(' ')}}>Delete name</button>
          <p>change name: {name}</p>

      {/* Quantity onChange*/}
          <input type="number" value={quantity} onChange={handleQuantity} placeholder="Enter Quantity" /><br/>
          <button onClick={()=>{setQuantity(' ')}}>Delete Quantity</button>
          <p>Quantity: {}   {quantity}</p>

      {/* Comment onChange*/}

          <textarea type="text" value={comment} onChange={handleComment} placeholder="Enter Comment" /><br/>
          <button onClick={()=>{setComment(' ')}}>Delete Comment</button><br/>

      {/*Shipping onChange*/}

          <label>
              <input type="radio" value='Pick up'
                     checked={shipping==='Pick up'}
                     onChange={handleShipping}/>
              Delivery</label><br/>
          <label>
              <input type="radio" value='Delivery'
                     checked={shipping==='Delivery'}
                     onChange={handleShipping}/>
              Pich up</label><br/>

      </div>

    </>
  )
}

export default App
