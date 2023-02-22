export const getParentFolder = (fullPath: string): string => {
    const fpa = fullPath.split("/")
    const pf = fpa.at(fpa.length - 2)
    if (pf === undefined)
        throw Error(`Cannot get parent folder from path: ${fullPath}`)
    return pf
}
