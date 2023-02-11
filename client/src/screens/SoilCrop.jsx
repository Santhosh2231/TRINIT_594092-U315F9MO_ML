import axios from 'axios';
import React, { useReducer, useState } from 'react'
import AlternativeCrops from '../components/AlternativeCrops';





const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}


const SoilCrop = () => {
  const [state, dispatch] = useReducer(dataReducer, { data: null })
  const [N,setN] = useState(null);
  const [P,setP] = useState(null);
  const [K,setK] = useState(null);
  const [temperature,setTemperature] = useState(null);
  const [humidity,setHumidity] = useState(null);
  const [ph,setPH] = useState(null);
  const [rainfall,setRainfall] = useState(null);
  function submitHandler(e){
      e.preventDefault();
      const data = {
        "N":N,
        "P":P,
        "K":K,
        "temperature":temperature,
        "humidity":humidity,
        "ph":ph,
        "rainfall":rainfall
      } 
      
        axios
          .post("http://127.0.0.1:5000/api/soilcrop", data)
          .then(response => {
            dispatch({ type: 'SET_DATA', payload: response.data })

          })
          .catch(error => {
          console.log(error);
          });

  }
  return (
    <div className='sm:container mt-10 justify-center align-middle'>
        <form className="w-[80%] mx-auto max-w-4xl" onSubmit={submitHandler}>
        <h4 className='font-Inria'>Crop Recommendation based on Soil</h4>


        <div className='flex flex-wrap -mx-3 mb-2 mt-10 md:my-12'>

          <div className="w-full md:w-1/3 px-3 mb-6  md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Nitrogen Ratio (N) %</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" name="N"  onChange={(e)=>setN(e.target.value)} value={N}  type="number" step={0.001} required />
          </div>


          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Phosphorus Ratio (P) %</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" name="P"  onChange={(e)=>setP(e.target.value)} value={P} type="number" step={0.001}  required />
          </div>


          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Potassium Ratio (K) %</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" name="K" onChange={(e)=>setK(e.target.value)} value={K} type="number" step={0.001} required  />
          </div>

        </div>

        <div className='flex flex-wrap -mx-3 mb-2 md:my-12'>
        
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
              <h6 className='text-lg'>Temperature of the Soil</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" name="temperature"  onChange={(e)=>setTemperature(e.target.value)} value={temperature} type="number" step={0.001} required />
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
              <h6 className='text-lg'>Humidity</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" name="humidity"  onChange={(e)=>setHumidity(e.target.value)} value={humidity} type="number" step={0.001} required/>
          </div>
          
        </div>

        <div className='flex flex-wrap -mx-3 mb-2 md:my-12'>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
              <h6 className='text-lg'>PH of the Soil</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" name="ph"  onChange={(e)=>setPH(e.target.value)} value={ph}   type="number" step={0.001} required/>
          </div>

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0" >
            <label className="block tracking-wide text-slate-700 text-xs font-bold mb-2">
            <h6 className='text-lg'>Rainfall in your area</h6>
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-blue-700 border-2 border-teal-600   rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-blue-700" name="rainfall"  onChange={(e)=>setRainfall(e.target.value)} value={rainfall}  type="number" step={0.001} required/>
          </div>
          
        </div>
        <button type="submit" className='border-4 rounded-lg text-white bg-teal-600 p-2 ' ><h4 className='text-2xl font-Inria text-white'>Predict</h4></button>
</form>
        {
          state.data && 
          <div className='mx-8'>
            
            <h4 className='my-10 font-Inria'>Main Suitable Crop</h4>
            <AlternativeCrops data={state.data.context.main} />
            <h4 className='my-10 font-Inria'>Alternative Suitable Crops</h4>
            <AlternativeCrops data={state.data.context.alternative} />
          </div>
        }

    </div>
  )
}

export default SoilCrop