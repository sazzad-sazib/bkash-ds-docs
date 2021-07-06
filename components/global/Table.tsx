import React from 'react';

interface tdProps {
    name: string;
    value:string;
}
export interface Props {
    th: string[];
    data: tdProps[];
}

const Table:React.FC<Props> =({th,data}) => {
  return (
      <div className="overflow-y-auto scrollbar-w-2 mb-4 scrollbar-track-gray-lighter scrollbar-thumb-rounded scrollbar-thumb-gray scrolling-touch">
          <table className="w-full text-left border-collapse">
              <thead>
              <tr>
              {th.map((thElem,index)=>
                      <th key={index} className="z-20 sticky top-0 text-sm font-semibold text-gray-600 bg-white p-0">
                          <div className="pb-2 pl-2 border-b border-gray-200">{thElem}</div>
                      </th>
              )}
              </tr>
              </thead>
              <tbody className="align-baseline">
              {data.map((tdElem,index)=>
                  <tr key={index} className='border-b last:border-none'>
                      <td
                          translate="no"
                          className="py-2 pr-2 font-mono text-xs text-primary whitespace-nowrap"
                      >
                          {tdElem.name}
                      </td>
                      <td
                          translate="no"
                          className="py-2 pl-2 font-mono text-xs text-light-blue-600 whitespace-pre"
                      >
                          {tdElem.value}
                      </td>
                  </tr>
              )}
              </tbody>
          </table>
      </div>
  )
}

export default Table;
