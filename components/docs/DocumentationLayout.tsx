import React from 'react';
import HeadCustom from "../global/HeadCustom";
import LeftBar from "./Leftbar";
import leftBarData, {leftBarDataElemProps} from "../../utilities/leftBarData";
import {useRouter} from "next/router";

interface Props {
  children: React.ReactNode;
  parentSlug: 'components' | 'contents';
  childSlug?: string;
}


const DocumentLayout:React.FC<Props> =({children,parentSlug,childSlug}) => {

    const getMdxData = () => {
        const fetchedData:(string | null) = localStorage.getItem('staticMdxFiles');
        let mdxData:leftBarDataElemProps[] = [];
        if(fetchedData) {
            mdxData = JSON.parse(fetchedData);
        }
        if(mdxData && mdxData.length > 0) {
            return mdxData;
        }else  {
            return [];
        }
    }

    const [newLeftBarData,setLeftbarData]= React.useState(leftBarData);
    React.useEffect(()=>{
        const leftBarLocalData= newLeftBarData;
        leftBarLocalData[0].data = getMdxData();
        setLeftbarData(leftBarLocalData)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const router = useRouter();
    return (
        <>
            <HeadCustom title={'Documentation'}/>
            <div className='h-[calc(100vh-4rem)] overflow-hidden block md:grid md:grid-cols-7 gap-4'>
                <LeftBar data={newLeftBarData} childSlug={childSlug} parentSlug={parentSlug}/>
                <div className='block md:col-span-5 h-[calc(100vh-4rem)] overflow-auto p-4'>
                    {children}
                </div>
            </div>
        </>
    )
}


export default DocumentLayout;
