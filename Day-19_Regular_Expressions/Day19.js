// DAY 19: Regular Expressions
// Activity 1 : Basic Regular Expressions
// Task 1
const str = "JavaScript is a versatile language. Learning JavaScript can be fun! Have you tried JavaScript frameworks?";

// Regular expression to match "javascript" globally and case-insensitively
const regex = /javascript/gi;

// Find all matches
const matches = str.match(regex);
console.log(matches);

// Task 2
const str1 = "Here are some numbers: 123, 4567, and 89.";

// Regular expression to match all sequences of digits globally
const regex1 = /\d+/g;

// Find all matches
const matches1 = str1.match(regex1);
console.log(matches1);

// Activity 2 : Character Classes and Quantifiers
// Task 3
const str3 = "Alice went to the Wonderland and met the Mad Hatter.";

// Regular expression to match words starting with a capital letter globally
const regex3 = /\b[A-Z][a-z]*\b/g;

// Find all matches
const matches3 = str3.match(regex3);
console.log(matches3);

// Task 4
const str4 = "The numbers are 42, 99, and 123456.";

// Regular expression to match sequences of one or more digits globally
const regex4 = /\d+/g;

// Find all matches
const matches4 = str4.match(regex4);
console.log(matches4);

// Activity 3 : Grouping and Capturing
// Task 5
const str5 = "(123) 456-7890";

// Regular expression to capture area code, central office code, and line number
const regex5 = /\((\d{3})\) (\d{3})-(\d{4})/;

// Apply the regular expression to the string
const match5 = str5.match(regex5);

if (match5) {
    // Extract the captures
    const areaCode = match5[1];
    const centralOfficeCode = match5[2];
    const lineNumber = match5[3];
    
    // Log the captures
    console.log(`Area Code: ${areaCode}`);
    console.log(`Central Office Code: ${centralOfficeCode}`);
    console.log(`Line Number: ${lineNumber}`);
} else {
    console.log("No match found.");
}

// Task 6
const email = "priyanka@example.com";

// Regular expression to capture username and domain
const regex6 = /^(\S+)@(\S+)$/;

// Apply the regular expression to the email
const match6 = email.match(regex6);

if (match6) {
    // Extract the captures
    const username = match6[1];
    const domain = match6[2];
    
    // Log the captures
    console.log(`Username: ${username}`);
    console.log(`Domain: ${domain}`);
} else {
    console.log("No match found.");
}

// Activity 4 : Assertions and Boundaries
// Task 7
const str7 = "Hello world! This is a test.";

// Regular expression to match a word at the beginning of the string
const regex7 = /^\b\w+\b/;

// Apply the regular expression to the string
const match7 = str7.match(regex7);

if (match7) {
    // Log the match
    console.log(`Match: ${match7[0]}`);
} else {
    console.log("No match found.");
}

// Task 8
const str8 = "This is a test string";

// Regular expression to match a word at the end of the string
const regex8 = /\b\w+\b$/;

// Apply the regular expression to the string
const match8 = str8.match(regex8);

if (match8) {
    // Log the match
    console.log(`Match: ${match8[0]}`);
} else {
    console.log("No match found.");
}

// Activity 5 : Practical Applications
// Task 9
function validatePassword(password) {
    // Regular expression to validate the password
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Test the password against the regular expression
    const isValid = regex.test(password);

    // Log whether the password is valid
    if (isValid) {
        console.log("Password is valid.");
    } else {
        console.log("Password is invalid.");
    }
}

// Test examples
validatePassword("Password1@"); // Password is valid.
validatePassword("password");   // Password is invalid.

// Task 10
function validateURL(url) {
    // Regular expression to validate the URL
    const regex = /^(https?:\/\/)?([a-zA-Z0-9.-]+)(:\d+)?(\/[a-zA-Z0-9._~:/?#@!$&'()*+,;=-]*)?$/;

    // Test the URL against the regular expression
    const isValid = regex.test(url);

    // Log whether the URL is valid
    if (isValid) {
        console.log("URL is valid.");
    } else {
        console.log("URL is invalid.");
    }
}

// Test examples
validateURL("https://www.example.com"); // URL is valid.
validateURL("http://example.com:8080/path"); // URL is valid.
validateURL("ftp://example.com"); // URL is invalid (ftp is not supported by this regex).

