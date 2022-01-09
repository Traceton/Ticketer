
import TicketComment from "../../../components/models/TicketComment";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  switch (req.method) {
    case "GET":
      try {
        const ticketComments = await TicketComment.find({});

        if (!ticketComments) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "ticketComments not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "ticketComments found",
          ticketComments: ticketComments,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticketComments not found",
          error: error,
        });
      }
      break;
    case "POST":
      try {
        const ticketComment = await TicketComment.create(req.body);

        res.status(201).json({
          message_type: "success",
          message: "ticketComment created",
          ticketComment: ticketComment,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticketComment not created",
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
  