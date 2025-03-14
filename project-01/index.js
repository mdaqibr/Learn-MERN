console.log("Project 01: Learn about the restful APIs.")

const express = require("express");
const app = express();
const PORT = 8000;

app.listen(PORT, () => console.log(`Server started on ${ PORT } port.`))

