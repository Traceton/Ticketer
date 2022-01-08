
  import Ticket from "../../../components/models/Ticket";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const ticketId = req.query.ticketId;

  switch (req.method) {
    case "GET":
      try {
        const ticket = await Ticket.findById(ticketId);

        if (!ticket) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "ticket not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "ticket found",
          ticket: ticket,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticket not found",
          error: error,
        });
      }
      break;
    case "PATCH":
      try {
        const ticket = await Ticket.findByIdAndUpdate(ticketId, req.body, {
          new: true,
          runValidators: true,
        });

        if (!ticket) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "ticket not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "ticket updated",
          ticket: ticket,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticket not updated",
          error: error,
        });
      }
      break;
    case "DELETE":
      try {
        const ticket = await Ticket.deleteOne({ _id: ticketId });

        if (!ticket) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "ticket not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "ticket deleted",
          ticket: ticket,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticket not deleted",
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

  