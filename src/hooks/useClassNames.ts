interface ClassNames {
    [key: string]: boolean;
}
const useClassNames = (classNames: ClassNames): string => {
    let className = ''
    for (const key in classNames) {
        if (classNames[key]) {
            className += key
            break
        }
    }
    return className
}

export {
    useClassNames
}