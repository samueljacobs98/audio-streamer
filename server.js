const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = 3005;

app.use(express.static("public"));

app.get("/stream/:songName", (req, res) => {
  const songName = req.params.songName;
  const filePath = path.join(__dirname, `./public/songs/${songName}`);
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Type": "audio/mpeg",
    "Content-Length": stat.size,
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
