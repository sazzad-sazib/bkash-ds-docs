import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {summaryBasic} from "../../../utilities/codeSnippetData";


const Form:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='layout' childSlug='summary'>
            <div>
                <CustomHead title='Card' description={'Card Guideline for bKash'} />
                <h3 className='mb-2 text-primary'>Form</h3>
                <p>
                    Here is a preview of Summary
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Basic Summary`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={summaryBasic} />
            </div>
        </DocumentationLayout>
    )
}

export default Form;
