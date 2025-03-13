// 📌 6. Error-Handling Middleware
// Error-handling middleware catches errors and prevents the app from crashing.

function handleErrorInMw(app) {
  // Error-Handling Middleware (last in the stack)
  app.use((err, req, res, next) => {
    console.error("Error:", err.message);
    res.status(500).send("Internal Server Error");
  });

  // Triggering an Error
  app.get("/error", (req, res) => {
    throw new Error("Something went wrong!");
  });
}

// ✅ Output: Logs the error and sends a 500 - Internal Server Error.

module.exports = { handleErrorInMw }