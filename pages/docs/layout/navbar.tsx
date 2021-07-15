import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import CustomHead from "../../../components/global/CustomHead";


const Navbar:React.FC<{}> =() => {
    return (
        <DocumentationLayout parentSlug='layout' childSlug='navbar'>
            <div>
                <CustomHead title='Navbar' description={'Navbar Guideline for bKash'} />
                <h3 className='text-primary mb-2'>Navbar Layout</h3>
                <p>
                    Here is a preview of all possible Badge variant
                </p>
            </div>
        </DocumentationLayout>
    )
}

export default Navbar;
