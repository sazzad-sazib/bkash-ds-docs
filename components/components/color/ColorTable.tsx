import React from 'react';
import {colorData} from "../../../utilities/otheInfoData";
import ColorItem from "./components/ColorItem";

const ColorTable: React.FC<{}> = () => {
    return (
        <div className="grid grid-cols-1 gap-8 my-6">
            {colorData.map((colorItem, i) => <ColorItem key={i} data={colorItem}/>)}
        </div>
    )
}

export default ColorTable;
