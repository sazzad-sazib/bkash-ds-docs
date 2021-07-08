import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CodeLiveEditor from "../../../components/global/CodeLiveEditor";
import {avatarSizesData,avatarSizesWithStatusData, avatarStatusVariantData,avatarInitialWithStatus} from "../../../utilities/codeSnippetData";


const Avatar:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='avatar'>
            <div>
                <CustomHead title='Avatar' description={'Avatar Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Avatar</h3>
                <p>
                    Here is a preview of all possible Avatar variant
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Avatar Sizes`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={avatarSizesData} />
                <p className='my-6'>
                    There are three sizes available {getPrimaryColor('`small`')}, {getPrimaryColor('`regular/default`')}, {getPrimaryColor('`large`')}.
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Avatar Sizes with Status`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={avatarSizesWithStatusData} />
                <p className='my-6'>
                    This is the example of avatar when it has status with different sizes
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Avatar With Initial`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={avatarInitialWithStatus} />
                <p className='my-6'>
                    This is the example of avatar when it dont have proper avatar source.
                </p>
                <h6 className='mt-10 mb-4'>{getPrimaryColor('`Avatar Status Variant`')} &nbsp;live example</h6>
                <CodeLiveEditor hasCopy code={avatarStatusVariantData} />
                <p className='my-6'>
                    This is the example of avatar status variants as follows, {getPrimaryColor('`active`')},{getPrimaryColor('`away`')},{getPrimaryColor('`busy`')},{getPrimaryColor('`offline`')}. Please Note, Avatar component for react will be updated when
                    we publish react components library
                </p>
            </div>
        </DocumentationLayout>
    )
}

export default Avatar;
