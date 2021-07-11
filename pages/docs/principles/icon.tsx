import React from 'react';
import DocumentationLayout from "../../../components/docs/DocumentationLayout";
import {getPrimaryColor} from "../../../utilities/utilFunction";
import CustomHead from "../../../components/global/CustomHead";
import CodeSnippet from "../../../components/global/CodeSnippet";
import {iconPackReactSample,iconPackSvgSample} from "../../../utilities/codeSnippetData";

export interface Props {
}

const Icon: React.FC<Props> = () => {
    return (
        <DocumentationLayout parentSlug='principles' childSlug='icon'>
            <div>
                <CustomHead title={'Icon System'} description={'Icon System for bKash'}/>
                <h3 className='text-primary mb-2'>Icon System</h3>
                <p>Icon Pack for the design system</p>
                <p className='py-6'>
                    We are using &nbsp;<a href={'https://heroicons.com/'} target={"_blank"}  rel='noreferrer noopener'> Hero Icons </a> and please use {getPrimaryColor('`@heroicons/react`')} for react projects.
                    If project has requirement of different icon please add this to your project as react component,(svg file for other framework).
                    The viewport of the icons should be {getPrimaryColor('`16x16`')} (default) or its ratio.
                </p>

                <h6>How to use in React</h6>
                <p className={'pt-4 pb-4'}>
                    As we said we are going to use  {getPrimaryColor('`@heroicons/react`')} . First Install it by,
                </p>
                <CodeSnippet language={'shell'}>
                    $   yarn add @heroicons/react
                </CodeSnippet>
                <p className='pt-4'>Then Simply just import icon to your file and use it</p>
                <CodeSnippet language={'jsx'}>
                    {iconPackReactSample}
                </CodeSnippet>


                <h6 className={"mt-4"}>How to use in Other project</h6>
                <p className={'pt-4 pb-4'}>
                    if you are using vueJs you can use {getPrimaryColor('`@heroicons/vue`')} . for other html websites or different library
                    please copy the svg from <a href={'https://heroicons.com/'} target={"_blank"}  rel='noreferrer noopener'> Hero Icons </a>
                    and use it as svg in your project, here is a quick sample of svg
                </p>
                <CodeSnippet language={'html'}>
                    {iconPackSvgSample}
                </CodeSnippet>
                <p className={'pt-4 pb-4'}>
                    <strong>Please Note, if you are using other icons please make it component or use in-line, Don't use it with {getPrimaryColor('`<img />`')} tag, </strong> your default icon size is {getPrimaryColor('`16x16`')} if you are using different svg icons please keep the same ratio and
                    pass proper classes like given sample.
                </p>
            </div>
        </DocumentationLayout>
    )
}

export default Icon;
