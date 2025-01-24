Regular expressions, often shortened to "regex" or "regexp", are patterns that
help programmers match, search, and replace text. Regular expressions are
powerful, but can be difficult to understand because they use so many special
characters.

In this spam filter project, you'll learn about capture groups, positive
lookaheads, negative lookaheads, and other techniques to match any text you
want.

~Notes~
const helpRegex = /please help|assist me/i;
// const isSpam = (msg) => msg.match(helpRegex);
const isSpam = (msg) => helpRegex.test(msg); 
//Instead of using the .match() method, you can use the .test() method of a
//regular expression to test if a string matches the pattern.

Arrays have a .some() method. Like the .filter() method, .some() accepts a callback function which should take an element of the array as the argument. The .some() method will return true if the callback function returns true for at least one element in the array.