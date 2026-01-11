const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Auto Deploy Working!</h1>
    <p>Node.js auto-deploy test app - deployment V2</p>
    <p>Time: ${new Date().toLocaleString()}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
