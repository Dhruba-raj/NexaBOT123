const express = require("express");
const app = express();
app.use(express.json());

app.post("/ask", (req, res) => {
  res.json({
    audio: "",
    emotion: "happy"
  });
});

app.listen(10000);
