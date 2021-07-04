import React from 'react';
import Head from "next/head";

interface HeadCustomProps {
    title?: string;
    description?: string;
}

const HeadCustom:React.FC<HeadCustomProps> = ({title,description}) => {
    return(
        <Head>
            <title>{title || 'bKash 02. Design System'}</title>
            <meta name="description" content={description || '02. Design System Created for bKash web'} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}
export default HeadCustom;