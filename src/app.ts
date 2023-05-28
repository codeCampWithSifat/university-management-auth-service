import express, { Application, Request, Response } from "express";
import cors from "cors";
const app: Application = express();

const port: number = 5000;

// use all the middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// testing route
app.get("/", (req:Request, res:Response) => {
  res.send("University Management Project");
});

export default app;
