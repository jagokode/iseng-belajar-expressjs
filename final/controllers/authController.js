// const express = require("express");

const login = (req, res) => {
  const { name } = req.body;
  if (!name)
    return res
      .status(401)
      .json({ success: false, message: "Kolom nama harus diisi" });
  res.json({ success: true, data: { name } });
};

module.exports = login;
