import React, { useEffect, useReducer } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from "axios";
import ForecastPlot from '../components/ForecastPlot';
import LoadingBox from '../components/LoadingBox';


const dataReducer = (state, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return { ...state, data: action.payload }
      default:
        return state
    }
  }

const CropPrice = () => {
    const navigate = useNavigate();

    const params = useParams();
    const {crop} = params;
    const [state, dispatch] = useReducer(dataReducer, { data: null })
    useEffect(() => {
        const getData = async () => {
          try {
            const { data } = await axios.get(`https://santhosh2211.pythonanywhere.com/api/cropprice/${crop}`);
            // console.log(data)
            dispatch({ type: 'SET_DATA', payload: data })
            // console.log(data);
          } catch (err) {
            console.log(err);
          }
        };
        getData();
    }, [crop]);
  return (
    <div className='md:container my-10'>
    {
        state.data? (<div className=''>
        
        <div className="">
        <div className="min-w-[10rem] md:min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1" >
        
        {/* <img src={state.data.context.min} alt="..." className="mx-auto h-20 w-20 " /> */}
        <h4 className='font-Inria text-2xl md:text-4xl font-black text-orange-600'>{crop.toUpperCase()}</h4>
        <h6 className='font-Inria text-lg md:text-2xl'>Current Price : {state.data.context.current_price.toFixed(2)}</h6>
        <h6 className='font-Inria text-lg md:text-2xl'>Min Price : {state.data.context.min_crop[1]+" -  "+state.data.context.min_crop[0]}</h6>
        <h6 className='font-Inria text-lg md:text-2xl'>Max Price : {state.data.context.max_crop[1]+" -  "+state.data.context.max_crop[0]}</h6>
       
        </div>
        <ForecastPlot data={[state.data.context.forecast_values]} />
        <h6 className='text-center'>Next 12 Months forecast prices for {crop}</h6>
         <ForecastPlot data={[state.data.context.previous_values]} /></div>
         <h6 className='text-center'>Previous 12 Months Price Trend for {crop}</h6>
           
            </div>
            ):<LoadingBox />
    }
    </div>
  )
}

export default CropPrice