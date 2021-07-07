import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import FontFamily from "../../../components/components/typography/FontFamily";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import MainTypography from "../../../components/components/typography/MainTypography";
import CustomHead from "../../../components/global/CustomHead";

export interface Props {
}

const Typography:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='principles' childSlug='typography'>
           <div>
               <CustomHead title={'Typography'} description={'Typography System for bKash'} />
               <h3 className='text-primary mb-2'>Typography</h3>
               <p>
                   Typography consist of {getPrimaryColor('`Font Family`')},
                   {getPrimaryColor('`Font Weight`')}and {getPrimaryColor('`Font Sizes`')}. See Section Below
               </p>
               <FontFamily />
               <MainTypography />
               <p className='my-6'>
                   If you have any question please consult Delivery lead.
               </p>
           </div>
        </DocumentationLayout>
    )
}

export default Typography;
