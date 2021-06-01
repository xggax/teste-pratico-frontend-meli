const express = require("express");
const router = express.Router();
const { searchItems, searchItem } = require("../services");

router.get("/", async function (req, res) {
  const { search } = req.query;
  if (!search) {
    res.status(400).json({ error: 'Search params has not provided' });
  }

  const data = await searchItems(search);
  res.status(200).send(data);

});

router.get("/:id", async function (req, res) {
  const { id } = req.params;
  if (!id) {
    res.status(400).json({ error: 'Item has not provided' });
  }

  const data = await searchItem(id);
  res.status(200).send(data);

});

module.exports = router;