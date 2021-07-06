export const getPrimaryColor = (text:string) => {
    return <span className='italic text-primary'>{text}</span>
}

export const convertClassToClassName = (str:string) => {
    console.log(str);
    console.log(str.replace('class','className'));
    return str.replace('class','className');
}