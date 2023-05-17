// import React, { useState } from 'react';


// interface CartItem extends Product {
//   quantity: number;
// }

// interface Props {
//   products: Product[];
// }

// const AddToCart: React.FC<Props> = ({ products } : any ) => {
//   const [cartItems, setCartItems] = useState<CartItem[]>([]);
// // const [data, setdata]=useState([])


//   const handleAddToCart = (product: Product) => {
//     const existingCartItem = cartItems.find((item) => item.id === product.id);

//     if (existingCartItem) {
//       const updatedCartItems = cartItems.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       );
//       setCartItems(updatedCartItems);
//     } else {
//       const newCartItem = { ...product, quantity: 1 };
//       setCartItems([...cartItems, newCartItem]);
//     }
//   };

//   return (
//     <div>
//       <h2>Products</h2>
//       <ul>
//         {products.map(({ product } : any) => (
//           <li key={product.id}>
//             {product.clothesName} - ${product.price}
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>

//       <h2>Cart</h2>
//       <ul>
//         {cartItems.map((item) => (
//           <li key={item.id}>
//             {item.clothesName} - ${item.price} - Quantity: {item.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
const AddToCart = () =>{
  
}
export default AddToCart;
