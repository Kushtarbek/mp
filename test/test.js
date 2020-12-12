function isUnique(str) {
    const chars = {};
  debugger
    for(let i = 0; i < str.length; i++) {
        const thisChar = str[i];
    
        if(chars[thisChar]) {
            return false;
        }

        chars[thisChar] = true;
    }

    return true;
};

isUnique('1233abc');