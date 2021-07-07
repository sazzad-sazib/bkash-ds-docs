import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CustomHead from "../../../components/global/CustomHead";
import ShadowBoxes from "../../../components/components/shadow/ShadowBoxes";
import ShadowLivePreview from "../../../components/components/shadow/ShadowLivePreview";
import ShadowTable from "../../../components/components/shadow/ShadowTable";

export interface Props {
}

const Shadow:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='principles' childSlug='shadow'>
            <div>
                <CustomHead title='Shadow' description={'Shadow Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Shadow System</h3>
                <p>
                    We will use few fix type of shadow we set based on variant from {getPrimaryColor('`xs`')} to
                    {getPrimaryColor('`2xl`')}. See Section Below
                </p>
                <ShadowBoxes />
                <ShadowLivePreview />
                <p className='my-6'>Here is a list of all shadow&apos;s Property</p>
                <ShadowTable />
            </div>
        </DocumentationLayout>
    )
}

export default Shadow;
