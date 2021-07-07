import React from 'react';
import Table from "../../../global/Table";
import {fontHeadingData} from "../../../../utilities/otheInfoData";


const FontHeadingTable: React.FC<{}> = () => {

    const th = ['Header', 'Style'];

    return (<Table th={th} data={fontHeadingData}/>)
}

export default FontHeadingTable;
