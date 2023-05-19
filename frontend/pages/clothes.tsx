import React, { useState, useEffect } from 'react';
import ClothesDetail from './ClothesDetail';
import axios from 'axios';


interface ClothingItem {
  id: number;
  clothesName: string;
  image: string;
  category: string;
  cart_id: number;
}

const Clothes: React.FC = () => {
  
  const [data, setData] = useState<ClothingItem[]>([]);
  const [count,setCount]=useState(0)
  const fetchData = () => {

    axios.get<{ products: ClothingItem[] }>(`http://${process.env.HOST}:${process.env.PORT}/all`)
      .then(response => {
        console.log(response);
        setData(response.data.products);
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchData()
  }, [count])

  return (
    <div style={{ marginTop: '10px', display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {data.map((el, i) => (
        <ClothesDetail el={el} key={i} setCount={setCount} count={count}/>
      )).reverse()}
    </div>
  );
};

export default Clothes