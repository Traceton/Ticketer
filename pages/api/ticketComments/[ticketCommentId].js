
  import TicketComment from "../../../components/models/TicketComment";
import dbConnect from "../../../utils/dbConnect";

dbConnect();

export default async (req, res) => {
  const ticketCommentId = req.query.ticketCommentId;

  switch (req.method) {
    case "GET":
      try {
        const ticketComment = await TicketComment.findById(ticketCommentId);

        if (!ticketComment) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "ticketComment not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "ticketComment found",
          ticketComment: ticketComment,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticketComment not found",
          error: error,
        });
      }
      break;
    case "PATCH":
      try {
        const ticketComment = await TicketComment.findByIdAndUpdate(ticketCommentId, req.body, {
          new: true,
          runValidators: true,
        });

        if (!ticketComment) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "ticketComment not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "ticketComment updated",
          ticketComment: ticketComment,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticketComment not updated",
          error: error,
        });
      }
      break;
    case "DELETE":
      try {
        const ticketComment = await TicketComment.deleteOne({ _id: ticketCommentId });

        if (!ticketComment) {
          return res
            .status(404)
            .json({ message_type: "warning", message: "ticketComment not found" });
        }

        res.status(201).json({
          message_type: "success",
          message: "ticketComment deleted",
          ticketComment: ticketComment,
        });
      } catch (error) {
        res.status(400).json({
          message_type: "warning",
          message: "ticketComment not deleted",
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

  