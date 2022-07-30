// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more
function spinWords(string){
    const words = string.split(' ');
    for (let i = 0; i < words.lenght; i++){
        if (words[i].lenght >= 5) {
            words[i] = words[i].split('').reverse().join('');
        }
    }
    return words.join(' ');
}

console.log(spinWords("Hey fellow warriors"), "Hey wollef sroirraw");
