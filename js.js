function findLongestWord(string) {
  // Change code below this line
  let words = string.split(" ");
  let longword = words[0];
  for (const word of words) {
    if (word.length > longword.length) {
      longword = word;
    }
    // Change code above this line
  }
  return longword;
}
console.log(findLongestWord("May the force be with you"));
