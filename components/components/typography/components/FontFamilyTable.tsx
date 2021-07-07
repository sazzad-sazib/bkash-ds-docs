import React from 'react';
import Table from "../../../global/Table";
import {fontFamilyData} from "../../../../utilities/otheInfoData";

const FontFamilyTable:React.FC =() => {
  const th =['Class','Properties'];
  return (<Table th={th} data={fontFamilyData} />)
}

export default FontFamilyTable;
