import express from "express";
import mongoose from "mongoose";
import rutaAnunt from "./routes/anunt.route.js";
import rutaAutentificare from "./routes/autentificare.route.js"
import rutaChat from "./routes/chat.route.js";
import rutaComenzi from "./routes/comenzi.route.js";
import rutaMesaj from "./routes/mesaj.route.js";
import rutaRating from "./routes/rating.route.js";
import rutaUser from "./routes/user.route.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import dotenv from "dotenv"



const app = express();
mongoose.set("strictQuery", true)
dotenv.config();

const conectare = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://ionutn1:licenta123@licenta.foo1yea.mongodb.net/"
    );
    console.log("Conectarea la baza de date a reusit!");
  } catch(error) {
    console.error("Eroare la conectarea la baza de date:", error);
    process.exit(1);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173", credentials:true }));

app.use("/api/anunturi", rutaAnunt);
app.use("/api/autentificare", rutaAutentificare);
app.use("/api/chat", rutaChat);
app.use("/api/comenzi", rutaComenzi);
app.use("/api/mesaj", rutaMesaj);
app.use("/api/rating", rutaRating);
app.use("/api/user", rutaUser);

app.use((err,req,res,next)=>{
  const statusEroare = err.status || 500
  const mesajEroare = err.message || "Ceva nu a functionat"

  return res.status(statusEroare).send(mesajEroare);
});

const port = 3000;
app.listen(port, () => {
  conectare();
  console.log("Bakcend-ul ruleaza pe portul", port, "fara probleme");
});
