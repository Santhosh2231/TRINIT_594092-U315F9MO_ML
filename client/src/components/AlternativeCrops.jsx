import React from 'react'

const AlternativeCrops = (props) => {
  return (
    <div>
    <div className='flex gap-5 justify-center flex-wrap group'>
        {props.data.map((row, index) => (
          <div key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-300'}>

          <div className="min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1" >

            {/* <img src={Soil} alt="..." className="mx-auto h-200 w-200 " /> */}
            <h4 className="my-3 font-Merriweather ">{row.toUpperCase()}</h4>
            
        </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AlternativeCrops