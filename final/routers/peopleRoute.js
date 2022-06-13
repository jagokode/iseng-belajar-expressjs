const express = require("express");
const router = express.Router();
const {
  getAllPeople,
  addNewPeople,
  editPeople,
  deletePeople,
} = require("../controllers/peopleController");

router.get("/", getAllPeople);

router.post("/", addNewPeople);

router.put("/:id", editPeople);

router.delete("/:id", deletePeople);

module.exports = router;
