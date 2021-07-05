import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";

export interface Props {
}

const Buttons:React.FC<Props> =() => {
    return (
        <DocumentationLayout parentSlug='components' childSlug='buttons'>
            Button Documentation
        </DocumentationLayout>
    )
}

export default Buttons;
