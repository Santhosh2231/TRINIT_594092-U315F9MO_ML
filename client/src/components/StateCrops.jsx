import React from 'react'

const Card = ({ title, crops }) => {
    const limitedCrops = crops.slice(0, 7);
    
    return (
      <div className="min-w-[10rem] font-Inria md:min-w-[14rem] duration-300 cursor-pointer border-2 border-slate-200 rounded-xl text-center bg-bg_light_primary p-6 flex-1
      " >
        <h6 className='font-Inria text-blue-600 text-lg'>{title}</h6>
        <ul>
          {limitedCrops.map((crop, index) => (
            <li key={index} className="overflow-auto break-word">{crop}</li>
          ))}
        </ul>
      </div>
    );
};


const StateCrops = (props) => {
    const data = props.data.content;
  return (
    <div className="my-10 flex gap-5 justify-between flex-wrap group">
      {Object.entries(data).map(([title, crops]) => (
        <Card key={title} title={title} crops={crops} />
      ))}
    </div>
  )
}

export default StateCrops