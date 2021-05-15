// Reducer function for reverting case
function calculateRevertCase(payload) {
    for(var i=0; i< payload.length ; i++) {
        var character = payload[i];
        if (character.toUpperCase() === character) {
            payload = payload.substring(0,i) + character.toLowerCase() + payload.substring(i+1);
        } else if (character.toLowerCase() === character) {
            payload = payload.substring(0,i) + character.toUpperCase() + payload.substring(i+1);
        }
    }
    return payload;
}

// Reducer function for lower case
function calculateLowerCase(payload) {
    return payload.toLowerCase();
}

// Reducer function for upper case
function calculateUpperCase(payload) {
    return payload.toUpperCase();
}

// Reducer for title case
// Convert first character of each word to upper case
// Articles, prepositions and onjunctions should not be capitalized if they are in between the string
function calculateTitleCase(payload) {
    var specialWords = ["a", "an", "the", "for", "and", "nor", "but"];

    var inputString = payload.split(" ");

    for ( var i=0; i<inputString.length ; i++ ) {
        var word = inputString[i];
        if (i===0 || i===inputString.length-1) {
            word = word.charAt(0).toUpperCase() + word.substring(1);
        } else {
            if (!specialWords.includes(word)) {
                word = word.charAt(0).toUpperCase() + word.substring(1);
            }
        }
        inputString[i] = word;
    }
    return inputString.join(" ");
}

// Reduer for sentence case
// Convert first char after each full stop to capital
// Rest all characters should be converted into lowercase
function calculateSentenceCase(payload) {
    var inputString = payload.split(".");
    for ( var i=0; i<inputString.length ; i++) {
        var word = inputString[i];
        console.log("word is: " + word);
        for ( var j=0; j< word.length ; j++) {
            if(word.charAt(j) !== " " && word.charAt(j)!== '/t' && word.charAt(j) !== '/n') {
                console.log("character at " + j + " is : " + word.charAt(j));
                word = word.substring(0,j) + word.charAt(j).toUpperCase() + calculateLowerCase(word.substring(j+1));
                break;
            }
        }
        // word = word.charAt(0).toUpperCase() + calculateLowerCase(word.substring(1));
        inputString[i] = word;
    }
    return inputString.join('.');

}

const converterReducer = (state="", action="") => {
    switch(action.type) {
        case "UPPERCASE":
            return calculateUpperCase(action.payload);
        case "LOWERCASE":
            return calculateLowerCase(action.payload);
        case "REVERTCASE":
            return calculateRevertCase(action.payload);
        case "TITLECASE":
            return calculateTitleCase(action.payload);
        case "SENTENCECASE":
            return calculateSentenceCase(action.payload);
        default:
            return state;
    }
}

export default converterReducer;