import React from 'react'
import Gain from "../assets/icons/gain-icon.png";
import Loss from "../assets/icons/loss-icon.png";

const data = [  { id: 1, name: 'John', age: 30 },  { id: 2, name: 'Jane', age: 25 },  { id: 3, name: 'Bob', age: 35 },]

function Top5(props) {
  return (
    <>
    {/* <h4>Top 5 Crops in this month</h4> */}
    <table className="w-full text-left table-collapse rounded-2xl">
      <thead className='rounded-2xl'>
        <tr>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">S.No</th>
          <th className="text-lg font-Merriweather bg-blue-300 p-2">Crop</th>
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
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace"><div className='flex align-middle justify-center'><p className='text-md  pt-3'>{row[2]}%</p>{" "}
            {row[2]>0 ? <img src={Gain} className="h-10 w-8 " />:<img src={Loss} className="h-10 w-8  " />}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}



export default Top5