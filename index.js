const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//think of tutorials as two arrays:
// each line of string is an element 
// make the line of string into its own array using .split(' ') 
//then map it with each index[0] as uppercase 
const titleCased = () => {
  return tutorials.map(sentence => {const words = sentence.split(' ');
  const captilizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
  const arrayOfWordsToString = captilizedWords.join(' ');
  return arrayOfWordsToString;
  })
}
