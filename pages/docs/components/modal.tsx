import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {modalSampleData,modalLayerData} from "../../../utilities/codeSnippetData";
import CodeSnippet from "../../../components/global/CodeSnippet";


const Modal:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='modal'>
            <div>
                <CustomHead title='Modal' description={'Modal Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Modal</h3>
                <p>
                    Here is a preview of all possible Modal variant
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Badge Variants`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={modalSampleData} />
                <p className='my-6'>
                    To apply that style please add the snippet below to {getPrimaryColor('`global.css`')}
                </p>
                <CodeSnippet language={'scss'}>
                    {modalLayerData}
                </CodeSnippet>
            </div>
        </DocumentationLayout>
    )
}

export default Modal;
