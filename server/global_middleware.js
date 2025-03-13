// 📌 1. Global Middleware using app.use()
// Middleware defined using app.use() is executed for every request.


function globalMw(app) {
  // Global Middleware - Runs for all requests
  app.use((req, res, nextfn) => {
    console.log(`Request URL: ${req.url}`);
    nextfn(); // Passes control to the next handler
  });

  // Routes
  app.get("/", (req, res) => {
    res.send("Homepage with MW;");
  });

  app.get("/about-me", (req, res) => {
    res.send("About Us");
  });
}

module.exports = { globalMw }