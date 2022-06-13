const express = require("express");
const app = express();
let { people } = require("./data");

app.use(express.json()); // parse json
app.use(express.urlencoded({ extended: false })); // parse form data
app.use(express.static("./public"));

app.post("/login", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res
      .status(401)
      .json({ success: false, message: "Kolom nama harus diisi" });
  res.json({ success: true, data: { name } });
});

app.get("/api/people", (req, res) => {
  res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
  const { name } = req.body;
  if (!name)
    return res.status(400).json({
      success: false,
      data: {},
      message: "Kolom nama harus diisi",
    });
  res.status(201).json({ success: true, data: name });
});

app.put("/api/people/:id", (req, res) => {
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
});

app.delete("/api/people/:id", (req, res) => {
  const { id } = req.params;
  const person = people.find((p) => p.id === Number(id));
  if (!person)
    return res
      .status(400)
      .json({ success: false, message: "People not found" });

  const newPeople = people.filter((p) => p.id !== person.id);
  people = [...newPeople];
  res.json({ success: true, data: people, message: "Deleted" });
});

app.listen(5000, () => console.log("Server is running on port 5000"));
