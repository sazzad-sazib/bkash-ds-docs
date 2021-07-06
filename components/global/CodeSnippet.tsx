import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import {ClipboardCheckIcon, ClipboardCopyIcon} from "@heroicons/react/solid";
import {copyTextToClipboard} from "../../utilities/utilFunction";

export interface Props {
    language?:any;
    children: React.ReactNode;
}



const CodeSnippet:React.FC<Props> =({language,children}) => {

    const [isCopied,setIsCopied] = React.useState(false);

    const handleCopy = (value:string) => {
        setIsCopied(true);
        copyTextToClipboard(value);
        setTimeout(()=>{
            setIsCopied(false);
        },1500)
    }
console.log(isCopied);
  return (
    <div className='relative my-2'>
        <div className='absolute right-2 top-2'>
            <button
                onClick={()=>children && handleCopy(children.toString())}
                className='bg-gray-800 bg-opacity-95 rounded-md text-gray-500 p-0.5'>
                {isCopied?
                    <ClipboardCheckIcon className='h-5 w-5 text-primary'/>
                :
                    <ClipboardCopyIcon className='h-5 w-5'/>
                }
            </button>
        </div>
      <SyntaxHighlighter customStyle={{padding: 16, borderRadius: 8, fontSize:12}} language={language? language: 'javascript'} style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet;
