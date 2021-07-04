import React from 'react';
import Layout from '../../../components/docs/DocumentationLayout';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {useRouter} from "next/router";
import marked from 'marked';

interface fileDataProps {
 title: string;
 id: string;
 slug: string;
}

export interface leftBarDataProps {
  slug: string;
  name: string;
  data: fileDataProps[]
}

export interface Props {
  leftBarData?: leftBarDataProps[];
  meta:any;
  content: any;
}

const PostDetails:React.FC<Props> =({meta,content}) => {

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
      <div className='prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-pink'>
        <div dangerouslySetInnerHTML={{__html: marked(content)}} />
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const folders = fs.readdirSync(path.join('docs'));

  let paths:any = [];

  folders.forEach((folder)=>{

    const getFiles = fs.readdirSync(path.join(`docs/${folder}`));
    //get files data;
    const getFilesData = getFiles.map((fileName)=>{
      paths.push({params: {slug:[folder,fileName]}});
    })
  })

  return{
    paths,
    fallback:false,
  }
}

export async function getStaticProps({params}:any) {

  const markdownMeta = fs.readFileSync(path.join(`docs/${params.slug[0]}`,params.slug[1]),'utf-8');

  const {data:meta,content} = matter(markdownMeta);

  return {
    props: {
      meta,content
    }
  }

}

export default PostDetails;
