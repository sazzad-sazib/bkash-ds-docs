import React from 'react';
import Layout from './../../../../components/docs/DocumentationLayout';
import marked from "marked";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Props {
  content: string;
  childSlug: string;
}

const ContentDetails:React.FC<Props> =({content,childSlug}) => {
  return (
      <Layout parentSlug={'contents'} childSlug={childSlug}>
        <div className='prose mt-6'>
          <div dangerouslySetInnerHTML={{__html: marked(content)}}/>
        </div>
      </Layout>
  )
}

export async function getStaticPaths() {
  const folderPath = 'docs';

    const getFiles = fs.readdirSync(path.join(folderPath));
    //get files data;
    const paths = getFiles.map((fileName)=>{
      return ({params: {slug:fileName.replace('.md','')}});
    })


  return{
    paths,
    fallback:false,
  }
}

export async function getStaticProps({params}:any) {

  const markdownMeta = fs.readFileSync(path.join(`docs`,params.slug+".md"),'utf-8');

  const {data:meta,content} = matter(markdownMeta);

  return {
    props: {
      meta,content,childSlug: params.slug
    }
  }

}

export default ContentDetails;
