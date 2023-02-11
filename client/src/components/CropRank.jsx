import React from 'react'



function CropRank(props) {
    // console.log(props.data.context);
  return (
    <>
    {/* <h4>Sixmonths 5 Crops in this month</h4> */}
    <table className="w-full text-left table-collapse rounded-2xl">
      <thead className='rounded-2xl'>
        <tr>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">S.No</th>
          <th className="text-lg font-Merriweather bg-blue-300 p-2">Crop</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Max yield Val</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Min yield Val</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Max Modal Price</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Mix Modal Price</th>
          <th className="text-lg font-Merriweather  p-2 bg-blue-300">Avg Modal Price</th>
        </tr>
      </thead>
      <tbody className='rounded'>
        {Object.keys(props.data).map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? 'bg-slate-100' : 'bg-slate-300'}>
          {/* {"temperature":22.6309424132,"humidity":92.3333828756,"ph":5.9296629318,"rainfall":112.654779275} */}
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{index+1}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{row.toUpperCase()}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].Max_Val}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].Min_Val}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].Max_Modal_Price}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].Min_Modal_Price}</p></td>
            <td className="p-2 border-t border-gray font-mono text-xs text-black whitespace-no-wrap"><p>{props.data[row].Avg_Modal_Price}</p></td>
          </tr>
        ))}
      </tbody>
    </table>
    </>
  )
}



export default CropRank;