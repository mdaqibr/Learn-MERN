console.log("Hello node..");

// Learn how the import and exports module works in the Node JS, and also how the

const MathUtils = require("./math");
const files = require("./files")

const os = require("os"); // Get informations about OS/CPU.

let math = new MathUtils("Aqib", 3, 1);
console.log(math.add());
console.log(math.sub());

let filePath = "./new_file_2.txt"
files.newFile(filePath);
files.appendInFile(filePath, "Hey this is new line. \n")

files.readFileData(filePath);


console.log(os.cpus().length); // 8 Threads can be run simulateneously. and sync requests are served by the thread pool.

/*
              Request
                  |
                  |
              Event Queue
                  |     
              /         \
            /             \
          /                 \
        /                     \
Async[Non-blocking]         Sync[Blocking]
        |                         |
        |                         |
        |                         |
        |                         |
Event Loop(Follows FIFO)        Thread Pool      

*/