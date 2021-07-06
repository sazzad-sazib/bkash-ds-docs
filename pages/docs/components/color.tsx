import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";

export interface Props {
}

const Color:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='color'>
            color Documentation
        </DocumentationLayout>
    )
}

export default Color;
