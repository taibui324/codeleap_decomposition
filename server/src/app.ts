import RestypedRouter from 'restyped-express-async'
import { FoodDeliveryAPI } from "./service/api";
import express, { Request, Response, NextFunction } from "express";
import axios from "restyped-axios";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});


