export function caesarCipher(str, shift){
    const split = str.split("");
    const result = [];

    split.forEach(char => {
        const code = char.charCodeAt(0);

        // Lowercase letters
        if(code >= 97 && code <= 122){
            result.push(String.fromCharCode((code - 97 + shift) % 26 + 97));
            
        // Uppercase letters
        } else if(code >= 65 && code <= 90){
            result.push(String.fromCharCode((code - 65 + shift) % 26 + 65));
        } else{
            result.push(char);
        };
    });

    return result.join("");
}