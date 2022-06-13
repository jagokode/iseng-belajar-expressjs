let { people } = require("../../data");

const getAllPeople = (req, res) => {
  res.status(200).json({ success: true, data: people });
};

const addNewPeople = (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({
      success: false,
      data: {},
      message: "Kolom nama harus diisi",
    });
  res.status(201).json({ success: true, data: name });
};

const editPeople = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const person = people.find((p) => p.id === Number(id));

  if (!person)
    return res.status(400).json({ success: false, message: "Not found" });

  const newPeople = people.map((p) => {
    if (p.id === Number(id)) p.name = name;
    return p;
  });

  people = [...newPeople];

  res.json({ success: true, data: people });
};

const deletePeople = (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === Number(id));
  if (!person)
    return res
      .status(400)
      .json({ success: false, message: "People not found" });

  const newPeople = people.filter((p) => p.id !== person.id);
  people = [...newPeople];
  res.json({ success: true, data: people, message: "Deleted" });
};

module.exports = {
  getAllPeople,
  addNewPeople,
  editPeople,
  deletePeople,
};
