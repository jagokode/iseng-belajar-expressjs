const express = require("express");
const router = express.Router();
const {
  getAllPeople,
  addNewPeople,
  editPeople,
  deletePeople,
} = require("../controllers/peopleController");

router.route("/").get(getAllPeople).post(addNewPeople);
router.route("/:id").put(editPeople).delete(deletePeople);

// router.get("/", getAllPeople);
// router.post("/", addNewPeople);
// router.put("/:id", editPeople);
// router.delete("/:id", deletePeople);

module.exports = router;
