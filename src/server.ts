import express from "express";
// const swaggerJsDoc = require("swagger-jsdoc");
// const swaggerUi = require("swagger-ui-express");
import "reflect-metadata";

import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const port = process.env.PORT || 3200;

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: "1.0.0",
      title: "Customer API",
      description: "Customer API Information",
      contact: {
        name: "Amazing Developer",
      },
      servers: ["http://localhost:3200"],
    },
  },
  // ['.routes/*.js']
  apis: ["build/server.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all
 *    responses:
 *      '200':
 *        description: A successful response
 */
app.get("/", (req, res) => {
  res.status(200).send("Deploy Backend Api");
});

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});
