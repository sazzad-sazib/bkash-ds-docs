import React from 'react';
import Table from "../../../global/Table";


const FontHeadingTable:React.FC<{}> =() => {

    const th=['Header','Style'];
    const td = [
        {
            name: 'Header 1',
            value: "color: #1F2937; font-family: 'Inter , ...rest'; font-weight: 900; margin: '24px 0 24px 0';  font-size: 60px;  line-height: 1;",
        },
        {
            name: 'Header 2',
            value: "color: #1F2937; font-family: 'Inter , ...rest'; font-weight: 800; margin: '20px 0 20px 0'; font-size: 48px;  line-height: 1;",
        },
        {
            name: 'Header 3',
            value: "color: #374151; font-family: 'Inter , ...rest'; font-weight: 700; margin: '16px 0 16px 0'; font-size: 36px;  line-height: 40px;",
        },
        {
            name: 'Header 4',
            value: "color: #374151; font-family: 'Inter , ...rest'; font-weight: 600; margin: '14px 0 14px 0'; font-size: 30px;  line-height: 36px;",
        },
        {
            name: 'Header 5',
            value: "color: #374151; font-family: 'Inter , ...rest'; font-weight: 500; margin: '14px 0 14px 0'; font-size: 24px;  line-height: 32px;",
        },
        {
            name: 'Header 6',
            value: "color: #374151; font-family: 'Inter , ...rest'; font-weight: 500; margin: '14px 0 14px 0'; font-size: 20px; line-height: 28px;",
        },
        {
            name: 'Paragraph',
            value: "color: #374151; font-family: 'Inter , ...rest'; font-weight: 400; font-size: 16px; line-height: 20px;",
        },
        {
            name: 'Link',
            value: "color: #d82a77; font-family: 'Inter , ...rest'; font-weight: 500; text-decoration: 'underline'; font-size: 16px; line-height: 20px;",
        },

    ]

  return (<Table th={th} data={td} />)
}

export default FontHeadingTable;
