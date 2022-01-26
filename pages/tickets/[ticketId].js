import Link from "next/link";
import { useRouter } from "next/router";

export default function TicketDetails(props) {
  // router object from next
  const router = useRouter();

  const ticket = props.ticket;

  return (
    <div>
      <form>
        <div>
          <h3>Show Ticket</h3>
        </div>

        <div>
          <div>
            <label htmlFor="title">title</label>
            <div>
              <h1 id="year">{props.ticket.title}</h1>
            </div>
          </div>
          <div>
            <label htmlFor="description">description</label>
            <div>
              <h1 id="year">{props.ticket.description}</h1>
            </div>
          </div>
          <div>
            <label htmlFor="author">author</label>
            <div>
              <h1 id="year">{props.ticket.author}</h1>
            </div>
          </div>
          <div>
            <label htmlFor="state">state</label>
            <div>
              <h1 id="year">{props.ticket.state}</h1>
            </div>
          </div>
          <div>
            <div>
              <button onClick={() => router.back()} type="button">
                Back
              </button>
              <Link href={"/tickets/editTickets/" + ticket._id}>
                <a>Edit</a>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export const getServerSideProps = async (context) => {
  // fetch ticket data from api here
  const ticketId = context.params.ticketId;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets/${ticketId}`,
    {
      method: "GET",
    }
  );

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      ticket: data.ticket,
    },
  };
};
