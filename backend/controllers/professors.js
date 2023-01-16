const { Router } = require("express");
const { Professor } = require("../utils/sequelize");
const professorsRouter = Router();

professorsRouter.post("/", async (req, res) => {
  const { name } = req.body;
  if (name) {
    try {
      const existingProfessor = await Professor.findOne({ where: { name } });
      if (existingProfessor) {
        return res.status(409).json({ error: "Professor already exists" });
      } else {
        const professor = await Professor.create({ name });
        res.status(201).json(professor.dataValues);
      }
    } catch (error) {
      res.status(400).json({ error: error.errors[0].message });
    }
  }
});

professorsRouter.get("/:name", async (req, res) => {
  let { name } = req.params;
  name = name.split("%20").join(" ");
  try {
    const professor = await Professor.findOne({ where: { name } });
    if (professor) {
      res.status(201).json(professor.dataValues);
    } else {
      res.status(404).json({ error: "Professor not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.errors[0].message });
  }
});

module.exports = professorsRouter;
