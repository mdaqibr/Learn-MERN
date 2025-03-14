
//📌 2. Route-Specific Middleware
// You can limit middleware to a specific route by passing a path to app.use().


// Middleware only for "/about" route
app.use("/about", (req, res, next) => {
  console.log("Middleware for /about only");
  next();
});

app.get("/", (req, res) => {
  res.send("Homepage (No middleware here)");
});

app.get("/about", (req, res) => {
  res.send("About Us (Middleware applies)");
});

// ✅ Output: Middleware is only called when accessing /about

