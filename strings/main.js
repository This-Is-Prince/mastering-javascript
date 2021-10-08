let fullName = "Prince";

// Strings methods

// 1.  string.charAt()

// console.log(fullName.charAt(0));
// console.log(fullName.charAt(fullName.length - 1));
// console.log(fullName.charAt(-1)); //space print
// index must be in pure number not in octal (01,02)
// console.log(fullName.charAt(-01)); // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
// console.log(fullName.charAt(01)); // Uncaught SyntaxError: Octal literals are not allowed in strict mode.

//  2. string.charCodeAt();

// console.log(fullName.charCodeAt(0)); //80
// console.log(fullName.charCodeAt(fullName.length - 1)); //101
// console.log(fullName.charCodeAt(-1)); // NaN
// console.log(fullName.charCodeAt(fullName.length)); // NaN

//  3. string.concat()

// console.log(fullName.concat(" Kumar")); //Prince Kumar
// console.log(fullName.concat("Kumar")); //PrinceKumar
// console.log(fullName.concat(" ", "Kumar", " ", "Aittan")); //Prince Kumar Aittan

// 4. string.indexOf();

// (i) indexOf(ch)

// console.log(fullName.indexOf("P")); //0
// console.log(fullName.indexOf("p")); //-1
// console.log(fullName.indexOf("e")); //5
// console.log(fullName.indexOf("a")); //-1

// (ii) indexOf(ch,index)

// console.log(fullName.indexOf("P", 0)); //0
// console.log(fullName.indexOf("P", 1)); //-1

// (iii) indexOf(str)

// console.log(fullName.indexOf("Pr")); //0
// console.log(fullName.indexOf("Prn")); //-1

// (iv) indexOf(str,index)
// console.log(fullName.indexOf("ri", 0)); //1
// console.log(fullName.indexOf("ri", 1)); //1
// console.log(fullName.indexOf("ri", 2)); //-1
