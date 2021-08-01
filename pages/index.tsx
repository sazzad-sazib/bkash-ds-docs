import React from "react";
import Link from 'next/link';
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { prefix } from "../utilities/prefix";

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
                <main className="flex justify-center items-center mx-auto max-w-7xl h-[calc(100vh-4rem)] px-4 sm:px-6 lg:px-8">
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
                                    passHref
                                >
                                      <span className="cursor-pointer w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-pink-700 transition duration-500 ease-in-out md:py-4 md:text-lg md:px-10">
                                          {ctaFirst.name}
                                      </span>
                                </Link>
                            </div>
                            <div className="mt-3 sm:mt-0 sm:ml-3">
                                <Link
                                    href={ctaSecond.link}
                                    passHref
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
                className="h-full w-full object-cover sm:h-full md:h-full lg:w-full lg:h-full"
                src={`${prefix}/cover.webp`}
                alt="cover"
            />
        </div>
    )
}
interface Props {
    staticMdxFiles: any;
}

const Home:React.FC<Props> =({staticMdxFiles}) => {

    React.useEffect(()=>{
        if(staticMdxFiles.length  > 0) {
            // fetching data in index page for documentation
            localStorage.setItem('staticMdxFiles',JSON.stringify(staticMdxFiles))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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

    //getting folders
    const folderPath = 'docs'
    const getFiles = fs.readdirSync(path.join(folderPath));
        //get files data;
        const getFilesData = getFiles.map((fileName)=>{
            const markdownMeta = fs.readFileSync(path.join(folderPath,fileName),'utf-8');
            const {data} = matter(markdownMeta);
            return {slug: fileName.replace('.md',''), title: data.title,id: data.id};
        }).sort((a,b)=>a.id-b.id);

    return {
        props: {
            staticMdxFiles: getFilesData
        }
    }
}

export default Home;