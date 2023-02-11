import React from 'react'
import Soil from "../assets/icons/soilimg.jpg";
import Price from "../assets/icons/priceimg.jpg"
// import Disease from "../assets/icons/diseaseimg.jpg"
import { Link } from 'react-router-dom';
import content from '../utils/content';
const Solutions = () => {
    const {prediction} = content;
  return (
    <div className='my-10'>

        <div className="flex gap-5 mx-10 justify-between flex-wrap group">
        {
            prediction.map((data,index)=>(
                <div
                data-aos="fade-up"
                className="min-w-[12rem] duration-300 cursor-pointer border-2 border-slate-100 rounded-xl text-center bg-bg_light_primary p-6 flex-1">
                <Link to={data.link}>
                    <div className="min-w-[14rem] container cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 my-10" >
                        <img src={data.logo} alt="..." className="mx-auto h-60 w-60 rounded-full" />
                        <h4 className="my-3 font-Merriweather ">{data.org}</h4>
                        <p className=''>{data.work}</p>
                        
                    </div>
                    </Link>

                
                </div>
            ))
        }
        
        {/* <div
          data-aos="fade-up"
          className="min-w-[12rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1">
            <Link to="/soilanalysis">
            <div className="min-w-[14rem] container cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 my-10" >
                <img src={Soil} alt="..." className="mx-auto h-60 w-60 rounded-full" />
                <h4 className="my-3 font-Merriweather ">Crop Recommendation based on Soil Fertility</h4>
                
            </div>
            </Link>

          
        </div>
        <div
          data-aos="fade-up"
          className="min-w-[12rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1">
          <Link to="/priceforecast">
            <div className="min-w-[14rem] container cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1 my-10">
                <img src={Price} alt="..." className="mx-auto h-60 w-60 rounded-full " />
                <h4 className="my-3 font-Merriweather ">Crop Price Prediction</h4>
            </div>
            </Link>

          
        </div> */}
   
    </div>
       
        
        
        
    </div>
  )
}

export default Solutions