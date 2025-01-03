/*

import dotenv from "dotenv";

const result = dotenv.config({ path: "../path-to-env/.env" });

if (result.error) {
    console.error("Error loading .env file:", result.error);
} else {
    console.log("Loaded .env file:", result.parsed);
}



import fs from 'fs';
import path from 'path';

const envPath = path.resolve(process.cwd(), '.env');
console.log(`Looking for .env file at: ${envPath}`);

if (fs.existsSync(envPath)) {
    console.log(".env file found!");
} else {
    console.error(".env file not found! Please create the file in the specified directory.");
}*/


import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({ path: "./src/.env" });
const PORT =process.env.PORT|| 8000;
 connectDB()
 .then(() => {
  app.listen(PORT , ()=>{
    console.log(`Server is lsn on ${PORT}`)
     // console.log(`Loaded PORT from .env: ${process.env.PORT}`);
    
    })
   }).catch((err) => {
    console.log("Mongodb failed", err)
  
 });