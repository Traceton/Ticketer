import { useRouter } from "next/router";
import Link from "next/link";

export default function EditTicket(props) {
  // router object from next
  const router = useRouter();

  const ticketId = router.query.ticketId;

  const updateTicket = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets/${ticketId}`,
      {
        body: JSON.stringify({
          title: event.target.title.value,
          description: event.target.description.value,
          author: event.target.author.value,
          state: event.target.state.value,
        }),
        headers: {
          "User-Agent": "*",
          "Content-Type": "application/json",
        },
        method: "PATCH",
      }
    );

    router.push(`/tickets/${ticketId}`);
  };

  const deleteTicket = async (event) => {
    event.preventDefault();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets/${ticketId}`,
      {
        headers: {
          "User-Agent": "*",
          "Content-Type": "application/json",
        },
        method: "DELETE",
      }
    );

    router.push(`/tickets`);
  };

  return (
    <div className="h-screen p-2 rounded-md bg-gray-900 font-light text-white">
      <div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col justify-center">
            <h3 className=" m-1 p-1 text-4xl leading-6 font-light text-white">
              Edit Ticket
            </h3>
          </div>

          <div className="m-2 p-2 ">
            <div className="pt-2 flex justify-end">
              <Link href="/tickets/createVehicle">
                <a className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white border-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  +
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <form onSubmit={updateTicket}>
        <div>
          <div className="">
            <label htmlFor="state">State</label>
            <div className="">
              <select
                defaultValue={props.ticket.state}
                type="select"
                id="state"
                name="state"
                autoComplete="state"
                className="rounded-sm"
              >
                <option>New</option>
                <option>Open</option>
                <option>Closed</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="title">title</label>
            <div>
              <input
                defaultValue="title"
                type="text"
                name="title"
                id="title"
                autoComplete="title"
                className="rounded-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="description">description</label>
            <div>
              <input
                defaultValue={props.ticket.description}
                type="text"
                name="description"
                id="description"
                autoComplete="description"
                className="rounded-sm"
              />
            </div>
          </div>
          <div>
            <label htmlFor="author">author</label>
            <div>
              <input
                defaultValue={props.ticket.author}
                type="text"
                name="author"
                id="author"
                autoComplete="author"
                className="rounded-sm"
              />
            </div>
          </div>

          <div>
            <div>
              <button onClick={() => router.back()} type="button">
                Back
              </button>
              <button onClick={deleteTicket} type="button">
                Delete
              </button>
              <button type="submit">Save</button>
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
      headers: {
        "User-Agent": "*",
        Accept: "application/json; charset=UTF-8",
      },
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
