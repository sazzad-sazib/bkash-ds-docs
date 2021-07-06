import React from 'react';
import {LiveProvider,LiveEditor,LiveError,LivePreview} from "react-live";
import dracula from 'prism-react-renderer/themes/dracula'
import CodeSwitcher from "./CodeSwitcher";
import Image from 'next/image';
import bKashImage from './../../public/bkash-small.svg';
import {ClipboardCheckIcon, ClipboardCopyIcon} from "@heroicons/react/solid";
import {copyTextToClipboard} from "../../utilities/utilFunction";

interface codeType {
    jsx: string;
    html:string;
}

export interface CodeEditorProps {
    code: codeType | any;
    className?: string;
    hasCopy?: boolean;
}

const options = ['jsx','html'];

const CodeLiveEditor:React.FC<CodeEditorProps> =({code,className,hasCopy=false}) => {
    const [activeType,setActiveType] = React.useState(options[0]);

    const Header = () => (
        <div className='flex justify-end items-center'>
            <div className='mr-2 mt-2'>
            <Image src={bKashImage} loading={'lazy'} width={30} height={30} alt='bkash Branding' />
            </div>
            <div>
                <CodeSwitcher options={options} active={activeType} onChange={setActiveType} hasCopy={hasCopy} handleCopy={()=>copyTextToClipboard(code[activeType])} />
            </div>
        </div>
    )

    return (
        <div className={!!className? `${className}`:''}>
            <LiveProvider code={code[activeType]} theme={dracula}>
                <Header/>
                <div className={`code-snippet`}>
                    <LivePreview className='code-snippet__preview' />
                    <LiveEditor className='code-snippet__editor'/>
                </div>
                <LiveError className='code-snippet__error' />
            </LiveProvider>
        </div>
  )
}

export default CodeLiveEditor;
