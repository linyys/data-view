interface ClassNames {
    [key: string]: boolean;
}
const useClassNames = (classNames: ClassNames): Function => {
    let className = ''
    for (const key in classNames) {
        if (classNames[key]) {
            className += ` ${key}`
        }
    }
    return (classNames: string | ClassNames): string => {
        if (typeof classNames === 'string') {
            className += ` ${classNames}`
        } else {
            for (const key in classNames) {
                if (classNames[key]) {
                    className += ` ${key}` 
                }
            }
        }
        return className
    }
}

export {
    useClassNames
}