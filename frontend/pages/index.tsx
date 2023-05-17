import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../styles/Layout.module.css";

{/*import img1 from "./images/img1.jpg"
// import img2 from "./images/img2.jpg"
// import img3 from "./images/img3.jpg"
// import img4 from "./images/img4.jpg"
// import img5 from "./images/img5.jpg"*/}
export default function Home() {
  const imagePaths = ["https://besthqwallpapers.com/Uploads/23-1-2021/153539/zara-logo-brown-plaster-background-zara-3d-logo-brands-zara-emblem.jpg"
  ,"https://www.swaggermagazine.com/home/wp-content/uploads/2023/03/Zara-HomePage-Landscape_W-1.jpg",
"https://static.zara.net/photos//contents/mkt/spots/ss23-help-customer/subhome-xmedia-10-north//landscape-web-27470945-8c31-433a-9eaf-392114b6a91d_0.jpg?ts=1682518360676",
"https://cache.marieclaire.fr/data/photo/w1200_h630_c17/1mm/histoire-zara-fast-fashion-mode.jpg",
"https://cdn.mos.cms.futurecdn.net/4HTRrzjb6FVy9gagXeXH9P.jpg"];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % imagePaths.length)
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [imagePaths.length]);

  return (
    <div className="slideshow-container">
      <TransitionGroup>
        <CSSTransition
          key={activeIndex}
          timeout={500}
          classNames="slide"
          exit={false}
        >
          <img
            src={imagePaths[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
            style={{ height: '100%',width: '100%'}}
          />
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}