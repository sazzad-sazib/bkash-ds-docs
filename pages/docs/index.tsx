import React from 'react';
import HeadCustom from "../../components/global/HeadCustom";
import LeftBar from "../../components/docs";
import matter from 'gray-matter'
import fs from 'fs';
import path from 'path';

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
    leftBarData: leftBarDataProps[]
}

const Documentation:React.FC<Props> =({leftBarData}) => {
  return (
    <>
    <HeadCustom title={'Documentation'}/>
        <div className='h-[calc(100vh-4rem)] overflow-hidden grid grid-cols-7 gap-4'>
         <LeftBar data={leftBarData} />
         <div className='col-span-5'>
             rest of contents
         </div>
        </div>
    </>
  )
}

export async function getStaticProps() {

    //getting folder info folder always should have 01-99.. with "." in last we split it
    // purpose of 01... is to maintain folder order as we are getting it from fs
    const folders = fs.readdirSync(path.join('docs'));

    const leftbarData = folders.map((folder)=>{
        const slug = folder.split('.')[1].toLowerCase().trim().replace(' ','');

        const getFiles = fs.readdirSync(path.join(`docs/${folder}`));
        const getFilesData = getFiles.map((fileName)=>{
            const markdownMeta = fs.readFileSync(path.join(`docs/${folder}`,fileName),'utf-8');
            const {data} = matter(markdownMeta);
            return data;
        })
        return {slug,name: folder.split(".")[1],data:getFilesData}
    })

    return {
        props: {
            leftBarData: leftbarData
        }
    }
}
export default Documentation;
