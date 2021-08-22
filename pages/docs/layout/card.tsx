import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {cardBasic,cardStat,cardLayerSnippet} from "../../../utilities/codeSnippetData";
import CodeSnippet from "../../../components/global/CodeSnippet";


const Card:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='layout' childSlug='card'>
            <div>
                <CustomHead title='Card' description={'Card Guideline for bKash'} />
                <h3 className='mb-2 text-primary'>Card</h3>
                <p>
                    Here is a preview of all possible Card variant
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Basic Card`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={cardBasic} />
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Stat Card`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={cardStat} />

                <p className='my-6'>
                    To apply that style please add the snippet below to {getPrimaryColor('`global.css`')}
                </p>
                <CodeSnippet language={'scss'}>
                    {cardLayerSnippet}
                </CodeSnippet>
            </div>
        </DocumentationLayout>
    )
}

export default Card;
