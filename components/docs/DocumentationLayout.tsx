import React from 'react';
import HeadCustom from "../global/HeadCustom";
import LeftBar from "./index";
import {leftBarDataProps} from "../../pages/docs/[...slug]";

interface Props {
    leftBarData?: leftBarDataProps[];
    children:React.ReactNode;
    slugs?: string| string[];
}

const DocumentLayout:React.FC<Props> =({leftBarData,children,slugs}) => {

    return (
        <>
            <HeadCustom title={'Documentation'}/>
            <div className='h-[calc(100vh-4rem)] overflow-hidden grid grid-cols-7 gap-4'>
                <LeftBar data={leftBarData || []} slugs={slugs || []} />
                <div className='col-span-5'>
                    {children}
                </div>
            </div>
        </>
    )
}


export default DocumentLayout;
