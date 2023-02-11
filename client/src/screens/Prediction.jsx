import React from 'react'
import Soil from "../assets/icons/soilimg.jpg";
import Price from "../assets/icons/priceimg.jpg"
// import Disease from "../assets/icons/diseaseimg.jpg"
import { Link } from 'react-router-dom';
const Solutions = () => {
  return (
    <div >
        <Link to="/cropanalysis">
          <div className="min-w-[14rem] container cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 my-10" >
              <img src={Soil} alt="..." className="mx-auto h-60 w-60 " />
              <h4 className="my-3 font-Merriweather ">Crop Recommendation based on Soil Fertility</h4>
              
          </div>
        </Link>
        <Link to="/soilanalysis">
          <div className="min-w-[14rem] container cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 my-10" >
              <img src={Soil} alt="..." className="mx-auto h-60 w-60 " />
              <h4 className="my-3 font-Merriweather ">Crop Recommendation based on Soil Fertility</h4>
              
          </div>
        </Link>
        <Link to="/priceforecast">
          <div className="min-w-[14rem] container cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 my-10">
              <img src={Price} alt="..." className="mx-auto h-60 w-60  " />
              <h4 className="my-3 font-Merriweather ">Crop Price Prediction</h4>
          </div>
        </Link>
        
    </div>
  )
}

export default Solutions