const express = require('express');
const cors = require('cors');
const path = require('path'); // Add this line
const fs = require('fs'); // Add this line

const app = express();
const port = 3002;
// Enable CORS to allow requests from different origins
const corsOption = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

app.use(cors(corsOption));

app.get("/locales/:component/:lang", (req, res) => {
  const { component, lang } = req.params; // Extract component and lang from URL
  const filePath = path.join(__dirname, "locales", component, `${lang}.json`); // Construct the file path

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).json({ error: "locales file not found." });
    }
    try {
      const jsonData = JSON.parse(data);
      res.set("Cache-Control", "public, max-age=3600");
      res.json(jsonData);
    } catch (parseError) {
      res.status(500).json({ error: "Error parsing translation file." });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});