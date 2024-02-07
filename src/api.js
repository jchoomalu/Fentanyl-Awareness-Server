const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors")
const app = express();
const router = express.Router();
app.use(cors())

// Configure CORS
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || ['http://localhost:3000'].indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // Reflect the request's credentials mode
};

app.use(cors(corsOptions));


router.get("/", (req, res) => {
  res.json({
    cookie: "Chocolate Chip Cookie"
  });
});

app.use(`/.netlify/functions/api`, router);

module.exports = app;
module.exports.handler = serverless(app);
