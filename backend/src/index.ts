import express from "express";
import cors from "cors";
import { router } from "./presentation/routes";

const app = express()
app.use(express.json())
app.use(
  cors({
    origin: "*", 
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(router);

app.listen(3000, () => {
  console.log("Server is running on port 3000")
}
)