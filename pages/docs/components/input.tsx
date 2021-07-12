import React from 'react';
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {
    inputVariant,
    inputLayerSnippet
} from "../../../utilities/codeSnippetData";
import CodeSnippet from "../../../components/global/CodeSnippet";
import DocumentationLayout from "../../../components/docs/DocumentationLayout";

export interface Props {
}

const Input:React.FC<Props> =() => {
  return (
      <DocumentationLayout parentSlug='components' childSlug='input'>
          <div>
              <CustomHead title='Input' description={'Input Guideline for bKash'} />
              <h3 className='text-primary mb-2'>Input System</h3>
              <p>
                  Here is a preview of all possible input variant
              </p>
              <h6 className='mt-10 mb-4'>{getPrimaryColor('`Input with variant`')} &nbsp;live example</h6>
              <CodeLiveEditor hasCopy code={inputVariant} />
              <p className='py-6'>
                  Please Copy the snippet in {getPrimaryColor('`global.css`')} to apply these style
              </p>
              <CodeSnippet language={'scss'} >
                  {inputLayerSnippet}
              </CodeSnippet>
              <p className='py-6'>
                  Please go to Storybook for react components you will find all documentation and play style. (we will update react documentation once we finalize react library and publish it)
              </p>
          </div>
      </DocumentationLayout>
  )
}

export default Input;
