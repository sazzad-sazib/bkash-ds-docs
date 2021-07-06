import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";

export interface Props {
}

const Typography:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='shadow'>
            shadow Documentation
        </DocumentationLayout>
    )
}

export default Typography;
