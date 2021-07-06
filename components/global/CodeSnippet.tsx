import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export interface Props {
    language?:any;
    children: React.ReactNode;
}

const CodeSnippet:React.FC<Props> =({language,children}) => {

  return (
    <div className='my-2'>
      <SyntaxHighlighter customStyle={{padding: 16, borderRadius: 8, fontSize:12}} language={language? language: 'javascript'} style={dracula}>
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default CodeSnippet;
