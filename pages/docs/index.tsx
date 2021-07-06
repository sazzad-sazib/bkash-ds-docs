import React from 'react';
import {useRouter} from "next/router";
import {leftBarDataProps} from "../../utilities/leftBarData";

export interface Props {
}

const DefaultDocRoute:React.FC<Props> =() => {
    // empty component we are using this for redirecting to first blog of the folder
    const router = useRouter();

    React.useEffect(()=>{
        const data = localStorage.getItem('staticMdxFiles');
        let leftBarData:leftBarDataProps[] = [];
        if(data) {
            leftBarData = JSON.parse(data);
        }else {
            router.push('/');
        }

        if(!!leftBarData && leftBarData.length !== 0){
            router.push(`/docs/contents/${leftBarData[0].slug}`)
        }else {
            router.push('/');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (<div/>)
}

export default DefaultDocRoute;
