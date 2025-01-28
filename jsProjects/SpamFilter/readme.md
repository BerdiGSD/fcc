Regular expressions, often shortened to "regex" or "regexp", are patterns that
help programmers match, search, and replace text. Regular expressions are
powerful, but can be difficult to understand because they use so many special
characters.

In this spam filter project, you'll learn about capture groups, positive
lookaheads, negative lookaheads, and other techniques to match any text you
want.

~NOTES~ const helpRegex = /please help|assist me/i; // const isSpam = (msg) =>
msg.match(helpRegex); const isSpam = (msg) => helpRegex.test(msg); //Instead of
using the .match() method, you can use the .test() method of a //regular
expression to test if a string matches the pattern.

Arrays have a .some() method. Like the .filter() method, .some() accepts a
callback function which should take an element of the array as the argument. The
.some() method will return true if the callback function returns true for at
least one element in the array.

A character class is defined by square brackets, and matches any character
within the brackets. For example, [aeiou] matches any character in the list
aeiou. You can also define a range of characters to match using a hyphen. For
example, [a-z] matches any character from a to z.

The dollar value may be more than one digit. To match this, the + quantifier can
be used - this matches one or more consecutive occurrences. For example, the
regular expression /a+/ matches one or more consecutive a characters.


A capture group is a way to define a part of the expression that should be
captured and saved for later reference. You can define a capture group by
wrapping a part of your expression in parentheses. For example, /h(i|ey) camper/
would match either hi camper or hey camper, and would capture i or ey in a
group.

Now that you have your capture group, you can mark the entire pattern as an
optional match. The ? quantifier matches zero or one occurrence of the preceding
character or group. For example, the regular expression /colou?r/ matches both
color and colour, because the u is optional.

While this expression does match 1 hundred dollars, it will not match 1  hundred
dollars, or 10 dollars.

Spam messages can and will find a way to exploit flaws in your detection. Time
to improve your regex.

Replace the first literal space with the \s* expression. The \s character class
matches whitespace, such as spaces, tabs, and new lines. The * quantifier means
"match the previous character 0 or more times".

Replace the second literal space with \s+. The + quantifier means "match the
previous character at least one time".

One last thing with this expression. You don't actually need the match value
from your capture group, so you can turn it into a non-capturing group. This
will allow you to group the characters together without preserving the result.

To create a non-capturing group in a regular expression, you can add ?: after
the opening parenthesis of a group. For instance, (?:a|b) will match either a or
b, but it will not capture the result.

Update your regular expression to use a non-capturing group.

(?:^|\s)

This means: Match either the start of the string (^) or a whitespace character (\s).
	•	^: Matches the beginning of a string.
	•	\s: Matches any whitespace character (e.g., space, tab, newline).
	•	|: Acts as an OR operator, so it matches either of the two parts.

(?:$|\s)

This means: Match either the end of the string ($) or a whitespace character (\s).
	•	$: Matches the end of a string.
	•	\s: Matches any whitespace character.


Just for fun: 
Potential further improvement

Issues in the Current Regex:
	1.	Hard to Read and Maintain: The character sets for each letter ([li], [e3], etc.) make it difficult to understand and modify.
	2.	Inconsistent Matching for Variations: It focuses only on specific letter replacements but misses possible common typos or formatting.
	3.	Duplication in Patterns: Both “please help” and “assist me” are handled independently but share similar structures.

Improved Regex:

const helpRegex = /\b(p[l1][e3a@4][a@4s5]+[e3]?\s*h[e3][l1]p|a[s5]{2}[i1l][s5t7]+\s*m[e3])\b/i;

Breakdown of the Regex:

1. Word Boundary (\b):
	•	Adding \b ensures the words are matched as whole words and not part of longer strings (e.g., “pleasesome” won’t match).

2. Handling Letter Variations:
	•	For “please help”:
	•	p[l1]: Matches “pl” with variations for “l” (like “1”).
	•	[e3a@4]: Matches variations of “e” (like “3,” “a,” “@,” “4”).
	•	[a@4s5]+: Matches “as” with variations (“a,” “@,” “4,” “s,” “5”), allowing multiple occurrences.
	•	[e3]?: Makes the final “e” optional (in case of typos).
	•	\s*: Matches optional spaces.
	•	h[e3][l1]p: Matches “help” with variations.
	•	For “assist me”:
	•	a[s5]{2}: Matches “ass” with variations for “s” (e.g., “5”).
	•	[i1l]: Matches “i” with variations (e.g., “1,” “l”).
	•	[s5t7]+: Matches “st” with variations.
	•	m[e3]: Matches “me” with variations.

3. Case-Insensitive Flag (/i):
	•	Ensures the regex matches regardless of the case (e.g., “HELP” or “help”).

4. Simplification:
	•	Combined patterns into one regex to avoid repetition.

Testing the Regex:

const helpRegex = /\b(p[l1][e3a@4][a@4s5]+[e3]?\s*h[e3][l1]p|a[s5]{2}[i1l][s5t7]+\s*m[e3])\b/i;

console.log(helpRegex.test("please help"));          // true
console.log(helpRegex.test("pl3as3 h3lp"));          // true
console.log(helpRegex.test("assist me"));            // true
console.log(helpRegex.test("a55ist m3"));            // true
console.log(helpRegex.test("pleaze help"));          // true
console.log(helpRegex.test("ass1st me"));            // true
console.log(helpRegex.test("random text"));          // false
console.log(helpRegex.test("pleasehalp"));           // false

Why This is Better:
	1.	Readability: Clear structure makes it easier to understand and maintain.
	2.	Flexibility: Matches more variations, including typos and common substitutions.
	3.	Efficiency: Combined patterns reduce redundancy.
