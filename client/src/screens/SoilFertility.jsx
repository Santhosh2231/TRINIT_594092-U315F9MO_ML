import React,{useEffect, useState,useContext, useReducer} from 'react';
import content from "../utils/content";
import axios from "axios";
import SoilAnalysis from '../components/SoilAnalysis';
import { Link } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';

const DataContext = React.createContext()

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}


const SoilFertility = () => {

    // const { Crops } = content;
    const [state, dispatch] = useReducer(dataReducer, { data: null })
    useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get('https://santhosh2211.pythonanywhere.com/api/soilcrop');
            // console.log(data)
            dispatch({ type: 'SET_DATA', payload: data })
          } catch (err) {
            console.log(err);
          }
        };
        getData();
    }, []);
    

    
    return (

        <div className='mt-10 ml-10 sm:container'>
            {/* <div className='bg-black inline p-5'>
            <Link to="/soilcropprediction" className="block mt-4 lg:inline-block lg:mt-0 text-teal-900 hover:text-white">
                <h6 className='text-teal-200 md:text-xl'>Make Crop Prediction</h6>
            </Link>
            </div> */}
            <button><Link to="/soilcropprediction" className="block mt-4 lg:inline-block border-2 p-5 mx-auto bg-slate-100 hover:border-blue-800 hover:bg-blue-100  border-teal-500  rounded lg:mt-0 text-green-900 hover:text-white">
                <h6 className='text-teal-700 md:text-4xl font-Merriweather'>Make Crop Prediction  </h6>
            </Link></button>
           
            {
                state.data? (
                    <>
                    
                    <div >
                        <p className='text-sm md:text-2xl my-10 align-middle justify-center'>Optimum Conditions for Crop vs Soil</p>
                        <div className="overflow-auto"><SoilAnalysis data={state.data.context} /></div>
                    </div>
                    </>
                ):<LoadingBox />
            }
        </div>
    )
}

export default SoilFertility