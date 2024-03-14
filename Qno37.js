"use strict";
// 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "", massage = "") {
    console.log(`i am making ka T-Shrit ${size} print a massage ${massage}`);
}
make_shirt("Large", "I love typescript");
make_shirt("medium", "I love javascript");
make_shirt("small", "I love coding");
