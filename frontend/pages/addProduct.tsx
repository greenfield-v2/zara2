import React,{useState} from 'react'
import axios from 'axios'
import { useRouter } from 'next/router';
import styles from '../styles/addProduct.module.css'

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
    <div className={styles.container}>
        <div className={styles['add-form']}> 
      <input
      className={styles['input-name']} 
        type='text' 
        placeholder='Clothes Name'
        name='clothesName'
        value={product.clothesName}
        onChange={handleChange}
      /><br/>
      <input 
      className={styles['input-price']} 
        type='number'
        placeholder='Price'
        name='price'
        value={product.price}
        onChange={handleChange}
      /><br/>
      <input
      className={styles['input-image']} 
        type='text' 
        placeholder='Image'
        name='image'
        value={product.image}
        onChange={handleChange}
      /><br/>
      <input 
      className={styles['input-category']} 
        type='text'
        placeholder='Category'
        name='category'
        value={product.category}
        onChange={handleChange}
      /><br/>
      <br/>
      <br/>
      <button
      className={styles['button-add']} 
       onClick={()=>add()}>Add Product</button>
       </div>
    </div>
    )
}

export default AddProduct
