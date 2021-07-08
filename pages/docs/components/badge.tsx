import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {badgeData,avatarSizesData} from "../../../utilities/codeSnippetData";


const Badge:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='badge'>
            <div>
                <CustomHead title='Badge' description={'Badge Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Badge</h3>
                <p>
                    Here is a preview of all possible Badge variant
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Badge Variants`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={badgeData} />
                <p className='my-6'>
                    Variant names as follows, {getPrimaryColor('`neutral`')}, {getPrimaryColor('`primary`')}, {getPrimaryColor('`success`')}, {getPrimaryColor('`warning`')}, {getPrimaryColor('`danger`')}.
                </p>
            </div>
        </DocumentationLayout>
    )
}

export default Badge;
