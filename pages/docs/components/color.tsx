import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import ColorTable from "../../../components/components/color/ColorTable";
import CodeSnippet from "../../../components/global/CodeSnippet";
import {tailwindFontColorImport} from "../../../utilities/codeSnippetData";

export interface Props {
}

const Color:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='color'>
            <div>
                <h3 className='text-primary mb-2'>Color System</h3>
                <p>
                    We will use a color system that has color shade from {getPrimaryColor('`50`')} to
                    {getPrimaryColor('`900`')}. See Section Below, Hover on them to copy hex
                </p>
                <ColorTable />
                <p className='my-6'>
                    We Will be using these colors for the whole system. Also Note <strong>primay color need to be added in {getPrimaryColor('`tailwind.config.js`')} to use.</strong>
                    see the snippet below
                </p>
                <CodeSnippet language={'JSON'}>
                    {tailwindFontColorImport}
                </CodeSnippet>
            </div>
        </DocumentationLayout>
    )
}

export default Color;
