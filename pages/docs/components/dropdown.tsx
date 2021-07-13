import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {dropdownSample,dropdwonCodeSnippet} from "../../../utilities/codeSnippetData";
import CodeSnippet from "../../../components/global/CodeSnippet";


const Dropdown:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='dropdown'>
            <div>
                <CustomHead title='Dropdown' description={'Dropdown Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Dropdown</h3>
                <p>
                    Here is a preview of dropdown variant
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Dropdown`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={dropdownSample} />
                <p className='my-6'>
                    You will need javascript to toggle it. Here its just html skeleton
                </p>
                <p className='my-6'>
                    To apply that style please add the snippet below to {getPrimaryColor('`global.css`')}
                </p>
                <CodeSnippet language={'jsx'}>
                    {dropdwonCodeSnippet}
                </CodeSnippet>
            </div>
        </DocumentationLayout>
    )
}

export default Dropdown;
