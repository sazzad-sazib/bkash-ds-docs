import React from 'react';
import HeadCustom from "../components/global/HeadCustom";

export interface Props {
}

const Documentation:React.FC<Props> =() => {
  return (
    <>
    <HeadCustom title={'Documentation'}/>
        <div>
            Documentation Starts Here
        </div>
    </>
  )
}

export default Documentation;
