const allProducts=require('../../frontend/data/data.json')
import connection from './db';

const rows=(arr)=>{
    const array=arr.map(e=>`("${e.clothesName}","${e.image}","${e.price}","${e.category}")`);
    return array.join()
}
const insertMany=()=>{
    const sql='INSERT INTO product (clothesName,image,price,category) VALUES '+rows(allProducts);
    connection.query(sql)
}
insertMany()

// (" Oversized dress","https://media1.popsugar-assets.com/files/thumbor/45L-x5oI8dpNa_DqkIJm0iy_Zf4/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2022/08/11/735/n/1922564/59635c5d0299b27e_netimg9s1bNj/i/Oversized-Dress-Zara-Atelier-Embroidered-Dress-Limited-Edition.jpg","100£","adulte"),("dress long","https://static.zara.net/photos///2023/V/0/1/p/2548/041/500/2/w/296/2548041500_1_1_1.jpg?ts=1678811417914","150£","adulte"),("jeans","https://static.zara.net/photos///2023/V/0/1/p/6164/033/427/14/w/560/6164033427_1_1_1.jpg?ts=1677067803926","100£","adulte"),("boy friend jean","https://static.zara.net/photos///2023/V/0/1/p/6164/023/406/13/w/316/6164023406_2_1_1.jpg?ts=1677067778237","120£","adulte"),("jeans taille haute","https://static.zara.net/photos///2023/V/0/1/p/1889/033/427/18/w/560/1889033427_1_1_1.jpg?ts=1680686819403","180£","adulte"),("Poplin dress","https://static.zara.net/photos///2023/V/0/1/p/2711/554/615/22/w/1920/2711554615_2_7_1.jpg?ts=1677499619522","200£","adulte"),("girl dress","https://static.zara.net/photos///2023/V/0/3/p/0794/606/713/108/w/284/0794606713_1_1_1.jpg?ts=1681204491435","80£","kids"),("cute dress","https://i.pinimg.com/736x/87/ed/8c/87ed8c7463a2c7f029ed60b79312febe.jpg","80£","kids"),("boy Jacket ","https://static.zara.net/photos///2022/I/0/3/p/3121/751/505/343/w/438/3121751505_1_1_1.jpg?ts=1664463803431","50£","kids"),("girl jacket","https://hips.hearstapps.com/hmg-prod/images/hbz-zara-surplus-08-1570196277.jpg?resize=480:*","80£","kids"),("cotton set","https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F36%2Faf%2F36af713215f5118f698a0e9196e20e1c2d8c04a4.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]","60£","kids")