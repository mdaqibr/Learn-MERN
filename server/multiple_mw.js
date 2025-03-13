// 📌 5. Multiple Middlewares (Sequential Execution)
// Express allows you to chain multiple middleware functions using next().


function multipleMw(app) {
  // First Middleware
  const firstMiddleware = (req, res, next) => {
    console.log("Middleware 1");
    next(); // Pass control to the next function
  };

  // Second Middleware
  const secondMiddleware = (req, res, next) => {
    console.log("Middleware 2");
    next();
  };

  app.use(firstMiddleware);
  app.use(secondMiddleware);

  app.get("/multiple", (req, res) => {
    console.log("Calling at the end.");
    res.send("Final Response");
  });
}

module.exports = { multipleMw };
