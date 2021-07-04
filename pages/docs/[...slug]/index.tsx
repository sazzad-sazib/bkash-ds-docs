import React from 'react';
import Layout from '../../../components/docs/DocumentationLayout';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {useRouter} from "next/router";

interface fileDataProps {
  title: string;
  slug:string;
  excerpt:string;
}

export interface leftBarDataProps {
  slug: string;
  name: string;
  data: fileDataProps[]
}

export interface Props {
  leftBarData?: leftBarDataProps[];
  children?: React.ReactNode;
}

const PostDetails:React.FC<Props> =({children}) => {

  const [leftBarData,setLeftBarData]  = React.useState([]);
  const router = useRouter();

  React.useEffect(()=>{
    //loading leftbarData we stored in '/' route; we are doing it to prevent from fetching everytime;
    const data = localStorage.getItem('leftBarData');
    if(data) {
      setLeftBarData(JSON.parse(data));
    }else {
      router.push('/');
    }
  },[])

  return (
    <Layout leftBarData={leftBarData} slugs={router.query.slug}>
      hello
    </Layout>
  )
}
export default PostDetails;
