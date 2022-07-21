import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
} from "../controller/room.js";
import { verifyAdmin } from "../util/verifyToken.js";

const router = express.Router();

// CREATE ROOM
router.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE ROOM
router.put("/:id", verifyAdmin, updateRoom);

// DELETE ROOM
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// GET SPECIFIC ROOM
router.get("/:id", getRoom);

// GET ALL ROOMS
router.get("/", getRooms);

router.put("/availability/:id", updateRoomAvailability);

export default router;
