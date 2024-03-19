// excersise # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
function make_shirt(size, text) {
    if (size === void 0) { size = 'large' && 'medium'; }
    if (text === void 0) { text = 'I love Typescript'; }
    console.log("the shirt '".concat(size, "' is size and '").concat(text, "' is text!"));
}
make_shirt("large", "I love this size");
make_shirt("medium", "I love more than medium");
make_shirt("small", "umaima");
