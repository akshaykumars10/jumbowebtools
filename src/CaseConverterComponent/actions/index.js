export const upperCase = (inputString) => {
    return {
        "type": "UPPERCASE",
        "payload": inputString
    };
}

export const lowerCase = (inputString) => {
    return {
        "type": "LOWERCASE",
        "payload": inputString
    }
}

export const revertCase = (inputString) => {
    return {
        "type": "REVERTCASE",
        "payload": inputString
    }
}

export const titleCase = (inputString) => {
    return {
        "type": "TITLECASE",
        "payload": inputString
    }
}

export const sentenceCase = (inputString) => {
    return {
        "type": "SENTENCECASE",
        "payload": inputString
    }
}