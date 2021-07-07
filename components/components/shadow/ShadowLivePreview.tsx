import React from 'react';
import CodeLiveEditor from "../../global/CodeLiveEditor";
import {shadowExampleLive} from "../../../utilities/codeSnippetData";

export interface Props {
}

const ShadowLivePreview:React.FC<Props> =() => {
  return (
    <div className='my-6'>
      <p>Please try this with Live Editor</p>
      <CodeLiveEditor code={shadowExampleLive} hasCopy previewClassName='flex items-center justify-center'  />
    </div>
  )
}

export default ShadowLivePreview;
