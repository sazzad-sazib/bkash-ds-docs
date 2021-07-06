import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import ColorTable from "../../../components/components/color/ColorTable";
import CodeSnippet from "../../../components/global/CodeSnippet";
import {tailwindFontColorImport} from "../../../utilities/codeSnippetData";

export interface Props {
}

const Typography:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='shadow'>
            <div>
                <h3 className='text-primary mb-2'>Shadow Pattern</h3>
                <p>
                    We will use few fix type of shadow we set based on variant from {getPrimaryColor('`xs`')} to
                    {getPrimaryColor('`2xl`')}. See Section Below
                </p>
            </div>
        </DocumentationLayout>
    )
}

export default Typography;
