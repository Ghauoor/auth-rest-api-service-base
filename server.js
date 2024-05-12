const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const dbConnection = require("./database/connection");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

dotenv.config();
const app = express();

// DB connection
dbConnection();

// request payload middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// cors
app.use(cors());

app.use("/api/v1/product", require("./routes/productRoutes"));
app.use("/api/v1/user", require("./routes/userRoutes.js"));

// APi Documentation
if (process.env.NODE_ENV != "production") {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server listing on port ${PORT}`));
