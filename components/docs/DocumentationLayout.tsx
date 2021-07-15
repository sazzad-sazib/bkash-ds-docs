import React from 'react';
import CustomHead from "../global/CustomHead";
import LeftBar from "./Leftbar";
import leftBarData, {leftBarDataElemProps} from "../../utilities/leftBarData";


interface Props {
  children: React.ReactNode;
  parentSlug: 'components' | 'contents' | 'principles' | 'layout';
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

    return (
        <>
            <CustomHead title={'Documentation'}/>
            <div className='h-[calc(100vh-4rem)] overflow-hidden block lg:grid lg:grid-cols-7 gap-4'>
                <LeftBar data={newLeftBarData} childSlug={childSlug} parentSlug={parentSlug}/>
                <div className='block lg:col-span-5 h-[calc(100vh-4rem)] overflow-auto p-4'>
                    {children}
                </div>
            </div>
        </>
    )
}


export default DocumentLayout;
