import React from 'react'



function SoilAnalysis(props) {
    // console.log(props.data.length);
  return (
    <>
    {/* <h4>Sixmonths 5 Crops in this month</h4> */}
    <table className="w-full text-left table-collapse rounded-2xl">
      <thead className='rounded-2xl'>
        <tr>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">S.No</th>
          <th className="text-lg font-Merriweather bg-blue-300 p-2">Crop</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Temperature</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Humidity</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">PH</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Rainfall</th>
        </tr>
      </thead>
      <tbody className='rounded'>
        {Object.keys(props.data).map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-300'}>
          {/* {"temperature":22.6309424132,"humidity":92.3333828756,"ph":5.9296629318,"rainfall":112.654779275} */}
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{index+1}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row.toUpperCase()}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].temperature_x} - {props.data[row].temperature_y} °C</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].humidity_x}% - {props.data[row].humidity_y}%</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].ph_x} - {props.data[row].ph_y}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].rainfall_x} - {props.data[row].rainfall_y} mm</p></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}



export default SoilAnalysis;