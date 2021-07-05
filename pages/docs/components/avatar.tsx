import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";

export interface Props {
}

const Avatar:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='avatar'>
            Avatar Documentation
        </DocumentationLayout>
    )
}

export default Avatar;
