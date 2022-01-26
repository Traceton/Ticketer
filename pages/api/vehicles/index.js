
import Vehicle from "../../../components/models/Vehicle";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const vehicles = await Vehicle.find({});

        if (!vehicles) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "vehicles not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "vehicles found",
          vehicles: vehicles,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "vehicles not found",
          error: error,
        });
      }
      break;
    case "POST":
      try {
        const vehicle = await Vehicle.create(req.body);

        res.status(201).json({
          message_type: "success",
          message: "vehicle created",
          vehicle: vehicle,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "vehicle not created",
          error: error,
        });
      }
      break;
    default:
      res.status(500).json({
        message_type: "error",
        message: "Response method not found",
      });
      break;
  }
};
  