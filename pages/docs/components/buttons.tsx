import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {buttonDataSizes,buttonDataVariant,buttonDataIconVariants,buttonLayerSnippet,buttonDataBlockElement} from "../../../utilities/codeSnippetData";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeSnippet from "../../../components/global/CodeSnippet";


const Buttons:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='buttons'>
            <div>
                <CustomHead title='Buttons' description={'Button Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Button System</h3>
                <p>
                    Here is a preview of all possible button variant
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Button sizes`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={buttonDataSizes} />
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Button Variant`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={buttonDataVariant} />
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Button with Icon`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={buttonDataIconVariants} />
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Button with Icon`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={buttonDataBlockElement} />

                <p className='py-6'>
                    Please Copy the snippet in {getPrimaryColor('`global.css`')} to apply these style
                </p>
                <CodeSnippet language={'scss'} >
                    {buttonLayerSnippet}
                </CodeSnippet>

                <p className='py-6'>
                    <strong>Additionally,</strong>{getPrimaryColor('`Button with Icon`')}  and {getPrimaryColor('`Button with Variant`')}  also available for different sizes provided
                    in first snippet.
                </p>
                <p className='py-6'>
                    Please go to Storybook for react components you will find all documentation and play style. (we will update react documentation once we finalize react library and publish it)
                </p>
                <p className='py-6'>
                    <strong>Please Note,</strong> Design of Buttons and other components system is alpha version and subject to change based on feedbacks you will find the updated change in this site
                </p>
            </div>
        </DocumentationLayout>
    )
}
export default Buttons;
