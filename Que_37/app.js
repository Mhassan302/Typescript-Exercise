"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
console.log();
function make_shirt(size = `Large`, message = `I love Typescript!`) {
    console.log(`This is a ${size.toLowerCase()} size T-shirt with a message: ${message}`);
}
make_shirt();
make_shirt(`medium`);
make_shirt(`small`, `We Gamin`);
