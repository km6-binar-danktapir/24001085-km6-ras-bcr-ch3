const express = require("express");
const app = express();

const PORT = 3000;

const carsRoutes = require("./route/cars-route.js");

// enable request body (json) for POST, PUT, and PATCH requests
app.use(express.json());

app.use(express.static("public"));

// provide module-specific routes here
app.use("/cars", carsRoutes);

app.use("/", (_, res) =>
    res.status(200).json({
        data: null,
        message: "Ping successfully",
    })
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
