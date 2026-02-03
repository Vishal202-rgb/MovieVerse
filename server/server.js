import express from "express";
import cors from "cors";
import "dotenv/config";
import { clerkMiddleware } from "@clerk/express";
import { serve } from "inngest/express";
import { inngest, functions } from "./inngest/index.js";
import connectDB from "./configs/db.js";

const app = express();

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(clerkMiddleware());

// ROUTES
app.get("/", async (req, res) => {
  await connectDB();
  res.send("Server is Live!");
});

app.use("/api/inngest", serve({ client: inngest, functions }));

// ❌ NO app.listen()
// ✅ EXPORT APP FOR VERCEL
export default app;
