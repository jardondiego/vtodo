function isElement(element) {
    return (element.nodeType === 1);
}

export function rearrange (parentElements, elements) {
    // Validation
    if (
        Array
            .from(parentElements)
            .filter(el => isElement(el))
            .length === 0 ||
        Array
            .from(elements)
            .filter(el => isElement(el))
            .length === 0
    ) return;

    elements.shift()

    let whereDoesItGo = 1

    console.log(elements)

    for (let index = 0; index < elements.length; index++) {
        if (whereDoesItGo === parentElements.length+1) whereDoesItGo = 1
        parentElements[whereDoesItGo-1].appendChild(elements[index])
        console.log(elements[index])
        whereDoesItGo++
    }

    return true
}