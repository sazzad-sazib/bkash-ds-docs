import React from 'react';
import {LiveProvider,LiveEditor,LiveError,LivePreview} from "react-live";
import dracula from 'prism-react-renderer/themes/dracula'
import CodeSwitcher from "./CodeSwitcher";

interface codeType {
    jsx: string;
    html:string;
}

export interface CodeEditorProps {
    code: codeType | any;
    className?: string;
}

const options = ['jsx','html'];

const CodeLiveEditor:React.FC<CodeEditorProps> =({code,className}) => {
    const [activeType,setActiveType] = React.useState(options[0]);

    const Header = () => (
        <div className='flex justify-between'>
            <img src={'/bkash.svg'} className='ml-2' width={60} alt='bkash Branding' />
            <div>
                <CodeSwitcher options={options} active={activeType} onChange={setActiveType} />
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
