import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import CropRank from '../components/CropRank';
import state_districts from "../utils/states"; 

const DataContext = React.createContext()

const dataReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, data: action.payload }
    default:
      return state
  }
}

const CropLocation = () => {
    const [state, dispatch] = useReducer(dataReducer, { data: null });

  const [selectedState, setSelectedState] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [type,setType] = useState(null);
//   const [season,setSeason] = useState(null);

  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(null);
  };

  const handleDistrictSelect = (event) => {
    setSelectedDistrict(event.target.value);
  };

  const handleSubmit = (event)=>{
    event.preventDefault();
    const data = {
        "location":selectedDistrict,
        "season":type
    } 
    console.log(data);
    
      axios
        .post("http://127.0.0.1:5000/api/croplocation", data)
        .then(response => {
          dispatch({ type: 'SET_DATA', payload: response.data })
          console.log(response.data);

        })
        .catch(error => {
        console.log(error);
        });
  }

  return (
    <div className="">


        <form onSubmit={handleSubmit}>
            <div className='flex flex-wrap md:mt-10'>
                <div className='md:w-1/2 w-full'>
                    <div className='flex justify-center items-center'><h4 className='font-Inria text-lg md:text-3xl mt-4 '>Select your Location</h4></div>
                    <div className="my-0 md:w-1/2 w-full m-auto px-10 py-2">
                        <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedState}
                        onChange={handleStateSelect}
                        >
                        <option value={null}>Select State</option>
                        {Object.keys(state_districts).map((val) => (
                            <option key={val} value={val}>
                            {val}
                            </option>
                        ))}
                        </select>
                    </div>
                    <div className="my-0 md:w-1/2 w-full m-auto px-10 py-2">
                        <select
                        className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                        value={selectedDistrict}
                        onChange={handleDistrictSelect}
                        disabled={!selectedState}
                        >
                        <option value={null}>Select District</option>
                        {selectedState &&
                            state_districts[selectedState].map((district) => (
                            <option key={district} value={district}>
                                {district}
                            </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='md:w-1/2 w-full'>
                    <div className='flex justify-center items-center'><h4 className='font-Inria text-lg md:text-3xl mt-4 '>Select Type of Season</h4></div>
                    
                    <div className=" flex flex-col mx-28 my-2">
                    <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                        <input type="radio" className="form-radio" name="type" value="Jan-Feb" onClick={(e)=>setType("Jan-Feb")} />
                        <span className="ml-2 font-Merriweather">January -February</span>
                    </label>
                    <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                        <input type="radio" className="form-radio" name="type" value="Mar-May" onClick={(e)=>setType("Mar-May")} />
                        <span className="ml-2 font-Merriweather">March - May</span>
                    </label>  
                    <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                        <input type="radio" className="form-radio" name="type" value="Jun-Sep" onClick={(e)=>setType("Jun-Sep")} />
                        <span className="ml-2 font-Merriweather">June - September</span>
                    </label>  
                    <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                        <input type="radio" className="form-radio" name="type" value="Oct-Dec" onClick={(e)=>setType("Oct-Dec")} />
                        <span className="ml-2 font-Merriweather">October - December</span>
                    </label>  
                    <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                        <input type="radio" className="form-radio" name="type" value="ANNUAL" onClick={(e)=>setType("ANNUAL")} />
                        <span className="ml-2 font-Merriweather">Annual</span>
                    </label>  
                    </div>
                </div>

            </div>
            <div className='flex justify-center items-center'>
                  <button type="submit" className='border-4 rounded-lg text-white bg-teal-600 p-2 mb-10' ><h4 className='text-2xl font-Inria text-white'>Predict</h4></button>
            </div>
        </form>

        {
          state.data && 
          <div className='mx-8'>
            
            <div >
                <p className='text-sm md:text-2xl font-Inria my-10 align-middle justify-center'>Suitable Crops based on season and Location. <span className=' text-sm md:text-lg text-orange-500'> (Ranked based on Avg Modal Price) </span></p>
                <div className="overflow-auto"><CropRank data={state.data.context} /></div>
            </div>
    
          </div>
        }








    

                
    </div>
  );
};

export default CropLocation;
