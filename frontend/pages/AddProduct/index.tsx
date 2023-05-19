import React,{useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';

const AddProduct = () => {
    const router=useRouter();
    const [product,setProduct]=useState({
        clothesName:'',
        price:'',
        image:'',
        category:''
    })
    const handleChange=(e)=>{
        setProduct(prev=>{
            return{
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }
    const add=async()=>{
        await axios.post(`http://${process.env.HOST}:${process.env.PORT}/product`,product)
        router.push('/clothes')
    }
    return (
    <div>
      <input
        type='text' 
        placeholder='Clothes Name'
        name='clothesName'
        value={product.clothesName}
        onChange={handleChange}
      /><br/>
      <input 
        type='number'
        placeholder='price'
        name='price'
        value={product.price}
        onChange={handleChange}
      /><br/>
      <input
        type='text' 
        placeholder='image'
        name='image'
        value={product.image}
        onChange={handleChange}
      /><br/>
      <input 
        type='text'
        placeholder='category'
        name='category'
        value={product.category}
        onChange={handleChange}
      /><br/>
      <button onClick={()=>add()}>Add Product</button>
    </div>
    )
}

export default AddProduct
