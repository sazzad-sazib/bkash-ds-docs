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
                title: 'Buttons Component',
                slug: 'buttons'
            },
            {
                id: 1,
                title: 'Avatar Component',
                slug: 'avatar'
            },
        ]
    }
]

export default data;






