import React from 'react';
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeSnippet from "../../global/CodeSnippet";
import {typographySnippet,typographyExactSnippet,tailwindLayerExtention} from "../../../utilities/codeSnippetData";
import CodeLiveEditor from "../../global/CodeLiveEditor";
import FontHeadingTable from "./components/FontHeadingTable";

export interface Props {
}

const MainTypography:React.FC<Props> =() => {
  return (
      <div className='mb-8'>
          <h4>bKash Typography</h4>
          <div className="mt-2 mb-4">
             The main idea of typography is to build a system providing styles for all headlines and paragraph.
          </div>
          <p>
              We always will use {getPrimaryColor('`text-gray-700`')} as primary font color for p and few titles
              we will describe below
          </p>
          <CodeSnippet language={'scss'}>
              {`$text-gray-700: #374151`}
          </CodeSnippet>
          <p>See the Live Editor below for whole typography and you can change and see how its changes </p>
          <CodeLiveEditor
              className='my-6'
              code={typographySnippet}
          />
          <p className='mt-6'>This happen because we applied a css layer.Here is the preview with same style</p>
          <CodeLiveEditor
              className='my-6'
              code={typographyExactSnippet}
          />
          <p>To apply style to all header please add this snippet after you imported tailwind</p>
          <CodeSnippet language={'scss'}>
              {tailwindLayerExtention}
          </CodeSnippet>
          <p className='my-6'>
              Please find the sizes in css format below
          </p>
          <FontHeadingTable />
          <p className='my-6'>
              If you have any question please consult Delivery lead.
          </p>
      </div>
  )
}

export default MainTypography;
