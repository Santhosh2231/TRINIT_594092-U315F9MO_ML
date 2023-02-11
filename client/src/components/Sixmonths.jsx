import React from 'react'
import Gain from "../assets/icons/gain-icon.png";
import Loss from "../assets/icons/loss-icon.png";

function Sixmonths5(props) {
  return (
    <>
    {/* <h4>Sixmonths 5 Crops in this month</h4> */}
    <table className="w-full text-left table-collapse rounded-2xl">
      <thead className='rounded-2xl'>
        <tr>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">S.No</th>
          <th className="text-lg font-Merriweather bg-blue-300 p-2">Month</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Top Crop</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Price</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Change</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Low crop</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Price</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Change</th>
        </tr>
      </thead>
      <tbody className='rounded'>
        {props.data.map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-300'}>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{index+1}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row[0]}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row[1]}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row[2]}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace"><div className='flex align-middle justify-center'><p className='text-md  pt-3'>{row[3]}%</p>{" "}
            {row[2]>0 ? <img src={Gain} className="h-10 w-8 " />:<img src={Loss} className="h-10 w-8  " />}</div></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row[4]}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row[5]}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace"><div className='flex align-middle justify-center'><p className='text-md  pt-3'>{row[6]}%</p>{" "}
            {row[2]<=0 ? <img src={Gain} className="h-10 w-8 " />:<img src={Loss} className="h-10 w-8  " />}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}



export default Sixmonths5