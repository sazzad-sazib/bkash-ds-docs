import React from "react";
import cover from './../assets/images/cover.webp';
import Link from 'next/link';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {leftBarDataProps} from "./docs/[...slug]";

interface ctaProps {
    name: string;
    link: string;
}

interface LeftSideContentProps {
    title:string
    subtitle:string;
    description: string;
    ctaFirst: ctaProps;
    ctaSecond: ctaProps;
}

const LeftSideContent:React.FC<LeftSideContentProps> = ({title,subtitle,description,ctaFirst,ctaSecond}) => {
    return(
        <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                    className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                    fill="currentColor"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                >
                    <polygon  points="50,0 100,0 50,100 0,100" />
                </svg>
                <main className="flex justify-center items-center mx-auto max-w-7xl min-h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
                    <div className="sm:text-center lg:text-left">
                        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                            <p className="block xl:inline">{title}</p>
                            <p className="block text-primary xl:inline">{subtitle}</p>
                        </h1>
                        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            {description}
                        </p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div className="rounded-md shadow">
                                <Link
                                    href={ctaFirst.link}
                                >
                                      <span className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-pink-700 transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10">
                                          {ctaFirst.name}
                                      </span>
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                    href={ctaSecond.link}
                                >
                                      <span className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-pink-100 hover:bg-pink-200 hover:text-primary transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10">
                                          {ctaSecond.name}
                                      </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

const RightSideContent = () => {
    return (
        <div className="hidden md:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 h-[calc(100vh-4rem)]">
            <img
                className="h-full w-full object-cover sm:h-full md:h-full lg:w-full lg:h-full"
                src={`${cover.src}`}
                alt="cover"
            />
        </div>
    )
}
interface Props {
    leftBarData: leftBarDataProps[];
}

const Home:React.FC<Props> =({leftBarData}) => {

    React.useEffect(()=>{
        if(leftBarData.length  > 0) {
            // fetching data in index page for documentation
            localStorage.setItem('leftBarData',JSON.stringify(leftBarData))
        }
    },[])

  return (
      <div className="relative bg-white overflow-hidden h-[calc(100vh-4rem)]">
          <LeftSideContent
              title={'bKash Web'}
              subtitle={'Design System'}
              description={'Developer and Designer Guideline to follow design principles'}
              ctaFirst={{name: 'Documentation', link: '/docs'}}
              ctaSecond={{name: 'Storybook', link: '/storybook'}}
          />
          <RightSideContent />
      </div>
  )
}

export async function getStaticProps() {

    //getting folder info, folder always should have 01-99.. with "." in last we split it
    // purpose of 01... is to maintain folder order as we are getting it from fs
    const folders = fs.readdirSync(path.join('docs'));

    const leftbarData = folders.map((folder)=>{
        //initiating return values
        let slug = '';
        let folderName = '';
        //if folder has serial ex 01. Name , we will split with .
        let slugArr = folder.split('.');
        // check if it has . in the folder name
        if(slugArr.length > 1) {
            slug = slugArr[1].toLowerCase().trim().replace(' ','');
            folderName = slugArr[1].trim();
        }else {
            slug = slugArr[0].toLowerCase().trim().replace(' ','');
            folderName = slugArr[0].trim();
        }
        const getFiles = fs.readdirSync(path.join(`docs/${folder}`));
        //get files data;
        const getFilesData = getFiles.map((fileName)=>{
            const markdownMeta = fs.readFileSync(path.join(`docs/${folder}`,fileName),'utf-8');
            const {data} = matter(markdownMeta);
            return data;
        })

        return {slug,name: folderName,data:getFilesData}
    })

    return {
        props: {
            leftBarData: leftbarData
        }
    }
}

export default Home;