const express = require("express");

const serverless = require("serverless-http");

const app = express();

const router = express.Router();

router.get("/", function(req, res) {
    res.json({
        "hello": "hi"
    })
});

router.get("/products", function(req, res) {
    res.json({
        "hello": "products"
    })
});

app.use("/.netlify/functions/api", router);


module.exports.handler = serverless(app);

