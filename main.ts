// excersise # 37
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message 
// that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.

function make_shirt(size:string='large'&&'medium',text:string='I love Typescript') {
    console.log(`the shirt '${size}' is size and '${text}' is text!`);
    
}
make_shirt("large")
make_shirt("medium","I love more than medium")
make_shirt("small")

