import React from 'react';
import Table from "../../global/Table";
import {shadowTableData} from "../../../utilities/otheInfoData";

export interface Props {
}

const ShadowTable:React.FC<Props> =() => {
    const th = ['Value','Properties']
  return (<Table th={th} data={shadowTableData} />)
}

export default ShadowTable;
