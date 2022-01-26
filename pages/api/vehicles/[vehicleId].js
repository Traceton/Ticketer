
  import Vehicle from "../../../components/models/Vehicle";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const vehicleId = req.query.vehicleId;

  switch (req.method) {
    case "GET":
      try {
        const vehicle = await Vehicle.findById(vehicleId);

        if (!vehicle) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "vehicle not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "vehicle found",
          vehicle: vehicle,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "vehicle not found",
          error: error,
        });
      }
      break;
    case "PATCH":
      try {
        const vehicle = await Vehicle.findByIdAndUpdate(vehicleId, req.body, {
          new: true,
          runValidators: true,
        });

        if (!vehicle) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "vehicle not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "vehicle updated",
          vehicle: vehicle,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "vehicle not updated",
          error: error,
        });
      }
      break;
    case "DELETE":
      try {
        const vehicle = await Vehicle.deleteOne({ _id: vehicleId });

        if (!vehicle) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "vehicle not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "vehicle deleted",
          vehicle: vehicle,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "vehicle not deleted",
          error: error,
        });
      }
      break;
    default:
      res.status(404).json({
        message_type: "error",
        message: "Response method not found",
      });
      break;
  }
};

  