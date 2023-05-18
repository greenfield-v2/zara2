import React, { useState, useEffect } from 'react'
import ClothesDetail from './ClothesDetail'
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()


interface ClothingItem {
  id: number;
  clothesName: string;
  image: string;
  category: string;
  cart_id: number;
}

const Men: React.FC = () => {
  const [data, setData] = useState<ClothingItem[]>([]);

  const fetchData = () => {
    axios
      .get<{ products: ClothingItem[] }>(`http://${process.env.HOST}:${process.env.PORT}/all/men`)
      .then(response => {
        console.log(response);
        setData(response.data.products);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ marginTop: '10px', display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      {data.map((el, i) => (
        <ClothesDetail el={el} key={i} />
      )).reverse()}
    </div>
  );
};

export default Men