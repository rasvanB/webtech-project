const { Router } = require("express");
const { Activity, Feedback } = require("../utils/sequelize");
const activitiesRouter = Router();

activitiesRouter.post("/:id/feedbacks", async (req, res) => {
  const { id } = req.params;
  const { description, date, type } = req.body;
  if (description && date && type) {
    try {
      const activity = await Activity.findOne({ where: { accessCode: id } });
      if (activity) {
        const feedback = await Feedback.create({
          description,
          date,
          type,
          activityId: id,
        });
        res.status(201).json(feedback.dataValues);
      } else {
        res.status(404).json({ error: "Activity not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error });
    }
  } else {
    res.status(400).json({ error: "Missing fields" });
  }
});

activitiesRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const activity = await Activity.findOne({
      where: { accessCode: id },
      include: "feedbacks",
    });
    if (activity) {
      res.status(201).json(activity.dataValues);
    } else {
      res.status(404).json({ error: "Activity not found" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

module.exports = activitiesRouter;
