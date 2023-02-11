import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
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
  const [season,setSeason] = useState(null);

  const handleStateSelect = (event) => {
    setSelectedState(event.target.value);
    setSelectedDistrict(null);
  };

  const handleDistrictSelect = (event) => {
    setSelectedDistrict(event.target.value);
  };

  return (
    <div className="">


<div className='flex justify-center items-center'><h4 className='font-Inria text-lg md:text-3xl mt-4 '>Select Type of Season</h4></div>
                <div className=" flex flex-col justify-center items-center my-10">
                  <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                    <input type="radio" className="form-radio" name="type" value="fruit" onClick={(e)=>setType("fruit")} />
                    <span className="ml-2 font-Merriweather">January -February</span>
                  </label>
                  <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                    <input type="radio" className="form-radio" name="type" value="vegetable" onClick={(e)=>setType("vegetable")} />
                    <span className="ml-2 font-Merriweather">March - May</span>
                  </label>  
                  <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                    <input type="radio" className="form-radio" name="type" value="vegetable" onClick={(e)=>setType("vegetable")} />
                    <span className="ml-2 font-Merriweather">June - September</span>
                  </label>  
                  <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                    <input type="radio" className="form-radio" name="type" value="vegetable" onClick={(e)=>setType("vegetable")} />
                    <span className="ml-2 font-Merriweather">October - December</span>
                  </label>  
                  <label className="inline-flex text-lg md:text-2xl items-center mr-6 mb-2">
                    <input type="radio" className="form-radio" name="type" value="vegetable" onClick={(e)=>setType("vegetable")} />
                    <span className="ml-2 font-Merriweather">Annual</span>
                  </label>  
                </div>
                








    


      <div className="w-1/2">
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
      <div className="w-1/2 ml-4">
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
  );
};

export default CropLocation;
