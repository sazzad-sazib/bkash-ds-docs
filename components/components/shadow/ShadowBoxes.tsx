import React from 'react';
import {shadowClasses} from "../../../utilities/otheInfoData";

const ShadowElement:React.FC<{styleName:string; name:string}> =({styleName, name}) => {
    return (
    <div className={`${styleName} h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center`}>
        {name}
    </div>
    )
};

const ShadowBoxes:React.FC =() => {

  return (
    <div className='my-12'>
        <div className="rounded-t-xl overflow-hidden bg-gradient-to-r from-pink-50 to-pink-100 p-8">
            <div className="grid grid-cols-2  gap-6 sm:grid-cols-3 md:grid-cols-4">
                {shadowClasses.map((clsName,i)=>
                    <ShadowElement key={i} styleName={clsName} name={`.${clsName}`} />
                )}
            </div>
        </div>
    </div>
  )
}

export default ShadowBoxes;
