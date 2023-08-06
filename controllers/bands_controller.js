// DEPENDENCIES
const bands = require("express").Router();
const db = require("../models");
const { Band, MeetGreet, SetTime, Event } = db;
const { Op } = require("sequelize");

// GET all bands or bands with a specific name
bands.get("/", async (req, res) => {
  try {
    const { name } = req.query;
    const whereCondition = name ? { name: { [Op.like]: `%${name}%` } } : {};

    const foundBands = await Band.findAll({
      where: whereCondition,
      order: [["available_start_time", "ASC"]],
      include: [
        {
          model: MeetGreet,
          as: "meet_greets",
          attributes: { exclude: ["band_id", "event_id"] },
          include: {
            model: Event,
            as: "event",
            where: {
              name: {
                [Op.like]: `%${req.query.event ? req.query.event : ""}%`,
              },
            },
          },
        },
        {
          model: SetTime,
          as: "set_times",
          attributes: { exclude: ["band_id", "event_id"] },
          include: {
            model: Event,
            as: "event",
            where: {
              name: {
                [Op.like]: `%${req.query.event ? req.query.event : ""}%`,
              },
            },
          },
        },
      ],
      order: [
        [
          { model: MeetGreet, as: "meet_greets" },
          { model: Event, as: "event" },
          "date",
          "DESC",
        ],
        [
          { model: SetTime, as: "set_times" },
          { model: Event, as: "event" },
          "date",
          "DESC",
        ],
      ],
    });

    res.status(200).json(foundBands);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET a specific band by name
bands.get("/:name", async (req, res) => {
  try {
    const foundBand = await Band.findOne({
      where: { name: req.params.name },
      include: [
        {
          model: MeetGreet,
          as: "meet_greets",
          attributes: { exclude: ["band_id", "event_id"] },
          include: {
            model: Event,
            as: "event",
            where: {
              name: {
                [Op.like]: `%${req.query.event ? req.query.event : ""}%`,
              },
            },
          },
        },
        {
          model: SetTime,
          as: "set_times",
          attributes: { exclude: ["band_id", "event_id"] },
          include: {
            model: Event,
            as: "event",
            where: {
              name: {
                [Op.like]: `%${req.query.event ? req.query.event : ""}%`,
              },
            },
          },
        },
      ],
      order: [
        [
          { model: MeetGreet, as: "meet_greets" },
          { model: Event, as: "event" },
          "date",
          "DESC",
        ],
        [
          { model: SetTime, as: "set_times" },
          { model: Event, as: "event" },
          "date",
          "DESC",
        ],
      ],
    });

    res.status(200).json(foundBand);
  } catch (error) {
    res.status(500).json(error);
  }
});

// CREATE a new band
bands.post("/", async (req, res) => {
  try {
    const newBand = await Band.create(req.body);
    res.status(200).json({
      message: "Successfully inserted a new band",
      data: newBand,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE an existing band
bands.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBands = await Band.update(req.body, {
      where: { band_id: id },
    });
    res.status(200).json({
      message: `Successfully updated ${updatedBands} band(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE an existing band
bands.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBands = await Band.destroy({
      where: { band_id: id },
    });
    res.status(200).json({
      message: `Successfully deleted ${deletedBands} band(s)`,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// EXPORT
module.exports = bands;
