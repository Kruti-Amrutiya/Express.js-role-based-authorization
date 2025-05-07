import express from "express";
import { verifyToken } from "../middlewares/authMiddleware.js";
import { authorizedRole } from "../middlewares/roleMiddleware.js";

export const userRoutes = express.Router();

// Only admin can acess this routes
userRoutes.get("/admin", verifyToken, authorizedRole("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

// Both admin and manager can acess this routes
userRoutes.get(
  "/manager",
  verifyToken,
  authorizedRole("admin", "manager"),
  (req, res) => {
    res.json({ message: "Welcome Manager" });
  }
);

// All can acess this routes
userRoutes.get(
  "/user",
  verifyToken,
  authorizedRole("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "Welcome User" });
  }
);
