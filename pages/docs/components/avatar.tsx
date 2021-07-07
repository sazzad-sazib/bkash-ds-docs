import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";


const Avatar:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='avatar'>
            <div>
                <CustomHead title='Avatar' description={'Avatar Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Avatar</h3>
                <p>
                    Here is a preview of all possible Avatar variant
                </p>
            </div>
        </DocumentationLayout>
    )
}

export default Avatar;
