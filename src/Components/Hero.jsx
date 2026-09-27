import React from 'react'
import swiggy from "../REACT JS IMAGES-1/swiggy.webp";
import zomato from "../REACT JS IMAGES-1/zomato.webp";
import kfc from "../REACT JS IMAGES-1/kfc_png.webp";


const Hero = () => {
  return (
    <div className="hero">
    <div className="left">
      <span className="title">TASTE THE BEST CHICKEN </span>
    <p> Kentucky Fried Chicken (KFC), is an American multinational fast food restaurant chain specializing in Southern fried chicken and chicken sandwiches. Headquartered in Plano, Texas, it is the world's second-largest restaurant chain (as measured by sales) after McDonald's, with over 31,980 locations globally in 150 countries, as of September 2025.[3][7] The chain is a subsidiary of Yum! Brands, a restaurant company that also owns the Taco Bell chain</p>
    <div className="btns">
      <button className="btn1">ORDER NOW</button>
      <button className="btn2">KFC CHICKEN</button>
    </div>
    
     <div className="social"> 
     <span className="social-1">Also Available On</span>
     <div className="social-icons">
      <img src={swiggy} alt="" />
      <img src={zomato} alt="" />
     </div>
      </div>
       </div>
      <div className="right">
        <img src={kfc} alt=""/>
         
         </div>
         </div>
   
  )
}

export default Hero;
