import express from "express";
import cors from "cors";
import "dotenv/config";
import routesAuntentication from "./router/authentication.js";
import routesRegistration from "./router/registration";
import routesReports from "./router/reports";

const app = express();
const port = process.env.PORT;

const router = express.Router();


app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

app.use("/", routesAuntentication);

app.use("/", routesRegistration);

app.use("/", routesReports);


router.all("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "The url you are looking for is not in our system",
  });
});

app.listen(process.env.PORT || 4321, () => {
  console.log(`app listening on port ${port}!, 
  the URL are :
  api/v1/auth/welcome,
  api/v1/auth/signup,
  api/v1/auth/signin,
  `);
});
