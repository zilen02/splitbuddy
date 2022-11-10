import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import friendsRoutes from "./routes/friendsRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/friends", friendsRoutes);

const PORT = process.env.PORT || 5001;

const connectionURL =
  "mongodb+srv://splitbuddy:Splitbuddy123@cluster0.4oiskez.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(connectionURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
  )
  .catch((error) => console.log(error));
