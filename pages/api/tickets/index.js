
import Ticket from "../../../components/models/Ticket";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const tickets = await Ticket.find({});

        if (!tickets) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "tickets not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "tickets found",
          tickets: tickets,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "tickets not found",
          error: error,
        });
      }
      break;
    case "POST":
      try {
        const ticket = await Ticket.create(req.body);

        res.status(201).json({
          message_type: "success",
          message: "ticket created",
          ticket: ticket,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticket not created",
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
  