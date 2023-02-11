import React,{useEffect, useState,useContext, useReducer} from 'react';
import content from "../utils/content";
import axios from "axios";
import Top5 from '../components/Top5';
import Bottom5 from '../components/Bottom5';
import Sixmonths from '../components/Sixmonths';
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


const Crops = () => {

    const { Crops } = content;
    const [state, dispatch] = useReducer(dataReducer, { data: null })
    useEffect(() => {
        window.scrollTo(0, 0);
        const getData = async () => {
          try {
            const { data } = await axios.get('https://santhosh2211.pythonanywhere.com//api/cropprice');
            // console.log(data)
            dispatch({ type: 'SET_DATA', payload: data })
          } catch (err) {
            console.log(err);
          }
        };
        getData();
    }, []);

    
    return (

        <div className='mt-10 container'>
            {
                state.data? (
                    <>
                    <div className="flex flex-wrap gap-[1%]  justify-center align-middle">
                        <div className='w-full md:w-[48%]'>
                            <p className='text-sm md:text-2xl my-10 align-middle justify-center'>Top5 crops of this month </p>
                            <Top5 data={state.data.context.top5} />
                        </div>
                    <div className='bg-white'>{" "}</div>
                    <div className='w-full md:w-[48%]'>
                        <p className='text-sm md:text-2xl my-10 align-middle justify-center'>Bottom5 crops of this month</p>
                        <Bottom5 data={state.data.context.bottom5}/>
                    </div>
                    </div>
                    <div>
                        <p className='text-sm md:text-2xl my-10 align-middle justify-center'>Sixmonths Forecast crops </p>
                        <div className="overflow-auto"><Sixmonths data={state.data.context.sixmonths}/></div>
                    </div>
                    </>
                ):<LoadingBox />
            }
            <p className='text-sm md:text-2xl my-20 align-middle justify-center'>Crop wise price Forecast </p>
            <div className="my-10 flex gap-5 justify-between flex-wrap group">
            
                {Crops.map((content, i) => (
                
                    <div
                    key={content.name}
                    className="min-w-[10rem] md:min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1
                    " 
                    >
                    <Link to={`/priceforecast/${content.name.toLowerCase()}`}>
                    <img src={content.icon} alt="..." className="mx-auto h-20 w-20 " />
                    <h6>{content.name}</h6>
                    </Link>
                    </div>
                
                ))}
            </div>
        </div>
    )
}

export default Crops