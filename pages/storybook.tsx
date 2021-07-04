import React from 'react';
import HeadCustom from "../components/global/HeadCustom";

export interface Props {
}

const Storybook:React.FC<Props> =() => {
  return (
    <>
        <HeadCustom title={'Story Book'}/>
        <div className='h-[calc(100vh-4rem)] w-full bg-red-50'>
           <iframe className='h-full w-full' src="https://next--storybookjs.netlify.app/official-storybook/?path=/story/addons-a11y-basebutton--default" />
        </div>
    </>
  )
}

export default Storybook;
