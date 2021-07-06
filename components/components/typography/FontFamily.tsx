import React from 'react';
import {getPrimaryColor} from "../../../utilities/utilFunction";
import FontFamilyTable from "./components/FontFamilyTable";

export interface Props {
}

const FontFamily:React.FC<Props> =() => {
  return (
    <div className='my-6'>
     <h4>Font Family</h4>
     <div className="mt-2 mb-4">
         We are Going to use Font {getPrimaryColor('`Inter`')} for Primary Font. It may change system to system
         please check guide on<br/>
         <a href={'https://github.com/tailwindlabs/tailwindcss/discussions/2060'} target={"_blank"} rel="noreferrer noopenner">
             How to Add Font to Project
         </a>
         &nbsp;. &nbsp;See the Font Families below in the table to see default fonts
     </div>
     <FontFamilyTable />
    </div>
  )
}

export default FontFamily;
