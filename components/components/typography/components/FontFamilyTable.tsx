import React from 'react';
import Table from "../../../global/Table";

export interface Props {
}
const tableData = [
    {
        name: 'font-sans',
        value: 'font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";'
    },
    {
        name: 'font-serif',
        value: ' font-family: ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;'
    },
    {
        name: 'font-nono',
        value: 'font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;";'
    }

];
const FontFamilyTable:React.FC<Props> =() => {
  return (<Table th={['Class','Properties']} data={tableData} />
)
}

export default FontFamilyTable;
