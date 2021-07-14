import React from 'react';
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {alertNeutralExample,alertSuccessExample,alertDangerExample,alertWarningExample, alertLayerSnippet} from "../../../utilities/codeSnippetData";
import CodeSnippet from "../../../components/global/CodeSnippet";
import DocumentationLayout from "../../../components/docs/DocumentationLayout";

export interface Props {
}

const Alert:React.FC<Props> =() => {
  return (
      <DocumentationLayout parentSlug='components' childSlug='alert'>
          <div>
              <CustomHead title='Alert' description={'alert Guideline for bKash'} />
              <h3 className='text-primary mb-2'>Alert</h3>
              <p>
                  Here is a preview of all possible Alert variant
              </p>
              <p className='my-6'>
                  Variant names as follows, {getPrimaryColor('`neutral`')}, {getPrimaryColor('`info`')}, {getPrimaryColor('`success`')}, {getPrimaryColor('`warning`')}, {getPrimaryColor('`danger`')}.
              </p>
              <h6 className='mt-10 mb-4'>{getPrimaryColor('`Alert Neutral`')} &nbsp;live example</h6>
              <CodeLiveEditor hasCopy code={alertNeutralExample} />
              <h6 className='mt-10 mb-4'>{getPrimaryColor('`Alert Success`')} &nbsp;live example</h6>
              <CodeLiveEditor hasCopy code={alertSuccessExample} />
              <h6 className='mt-10 mb-4'>{getPrimaryColor('`Alert Danger`')} &nbsp;live example</h6>
              <CodeLiveEditor hasCopy code={alertDangerExample} />
              <h6 className='mt-10 mb-4'>{getPrimaryColor('`Alert Warning`')} &nbsp;live example</h6>
              <CodeLiveEditor hasCopy code={alertWarningExample} />
              <p className='my-6'>
                  To apply that style please add the snippet below to {getPrimaryColor('`global.css`')}
              </p>
              <CodeSnippet language={'scss'}>
                  {alertLayerSnippet}
              </CodeSnippet>
          </div>
      </DocumentationLayout>
  )
}

export default Alert;
