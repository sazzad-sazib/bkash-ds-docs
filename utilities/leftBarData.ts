export interface  leftBarDataProps {
    name: string;
    slug: string;
    data: leftBarDataElemProps[]
}

export interface leftBarDataElemProps {
    id: number | string;
    title: string;
    slug: string;
}

const data:leftBarDataProps[] = [
    {
        name: 'Contents',
        slug: 'contents',
        data: [],
    },
    {
        name: 'Components',
        slug: 'components',
        data: [
            {
                id: 0,
                title: 'Typography',
                slug: 'typography'
            },
            {
                id: 1,
                title: 'Color Palette',
                slug: 'color'
            },
            {
                id: 2,
                title: 'Box Shadow',
                slug: 'shadow'
            },
        ]
    }
]

export default data;






