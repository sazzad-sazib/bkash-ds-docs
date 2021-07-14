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
        name: 'Principles',
        slug: 'principles',
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
                title: 'Shadow',
                slug: 'shadow'
            },
            {
                id: 3,
                title: 'Icon Pack',
                slug: 'icon'
            },
        ]
    },
    {
        name: 'Components',
        slug: 'components',
        data: [
            {
                id: 0,
                title: 'Button',
                slug: 'buttons'
            },
            {
                id: 1,
                title: 'Avatar',
                slug: 'avatar'
            },
            {
                id: 2,
                title: 'Badge',
                slug: 'badge'
            },
            {
                id: 3,
                title: 'Input',
                slug: 'input'
            },
            {
                id: 4,
                title: 'Dropdown',
                slug: 'dropdown'
            },
            {
                id: 5,
                title: 'Alert',
                slug: 'alert'
            }
        ]
    }
]

export default data;






