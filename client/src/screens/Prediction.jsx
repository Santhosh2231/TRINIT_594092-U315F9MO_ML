import React from 'react'
import Soil from "../assets/icons/soilimg.jpg";
import Price from "../assets/icons/priceimg.jpg"
// import Disease from "../assets/icons/diseaseimg.jpg"
import { Link } from 'react-router-dom';
import content from '../utils/content';
const Solutions = () => {
    const {predictions} = content;
  return (
    <div className='my-10'>
        <h4 className='text-center font-Merriweather my-2'>Our Crop Predictions</h4>

        <div className="flex gap-5 justify-between flex-wrap">
          {predictions.solutions_content.map((content, i) => (
          
            <Link to={content.link} className="flex flex-wrap md:w-1/2 md:m-auto mx-4 ">
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 600}
              className=" duration-300 cursor-pointer border-2  border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1
              "
            
            >
              <img src={content.logo} alt="..." className="mx-auto h-40 w-40 rounded-full" />
              <h6 className="my-3 font-Inria text-2xl">{content.org}</h6>
              {/* <p className="leading-7">{content.title}</p> */}
              {/* <button className="border-2 border-blue-400 m-4 text-white rounded-lg bg-blue-400 p-0.5">{content.time}</button> */}
              <p className="leading-7">{content.work}</p>
            </div>
            </Link>
           
          ))}
        </div>

    
   
    </div>
  )
}

export default Solutions