import { useRouter } from "next/router";

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
          number: event.target.number.value,
          state: event.target.state.value,
          title: event.target.title.value,
          description: event.target.description.value,
          author: event.target.author.value,
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
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Edit ticket
          </h2>
        </div>

        <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={updateTicket}>
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-medium text-white"
                >
                  number
                </label>
                <div className="mt-1">
                  <input
                    defaultValue={props.ticket.number}
                    id="number"
                    name="number"
                    type="string"
                    autoComplete="number"
                    required
                    className="appearance-none block w-full px-3 py-2 bg-gray-700 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-white"
                >
                  state
                </label>
                <div className="mt-1">
                  <input
                    defaultValue={props.ticket.state}
                    id="state"
                    name="state"
                    type="state"
                    autoComplete="state"
                    required
                    className="appearance-none block w-full px-3 py-2 bg-gray-700 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-white"
                >
                  title
                </label>
                <div className="mt-1">
                  <input
                    defaultValue={props.ticket.title}
                    id="title"
                    name="title"
                    type="title"
                    autoComplete="title"
                    required
                    className="appearance-none block w-full px-3 py-2 bg-gray-700 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-white"
                >
                  description
                </label>
                <div className="mt-1">
                  <input
                    defaultValue={props.ticket.description}
                    id="description"
                    name="description"
                    type="description"
                    autoComplete="description"
                    required
                    className="appearance-none block w-full px-3 py-2 bg-gray-700 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-medium text-white"
                >
                  author
                </label>
                <div className="mt-1">
                  <input
                    defaultValue={props.ticket.author}
                    id="author"
                    name="author"
                    type="author"
                    autoComplete="author"
                    required
                    className="appearance-none block w-full px-3 py-2 bg-gray-700 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-white"
                  />
                </div>
              </div>
              <div className="flex flex-row ">
                <button
                  onClick={() => router.back()}
                  type="button"
                  className=" flex justify-center py-2 px-4 mx-1 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Back
                </button>
                <button
                  onClick={deleteTicket}
                  type="button"
                  className=" flex justify-center py-2 px-4 mx-1 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Delete
                </button>
                <button
                  type="submit"
                  className=" flex grow justify-center py-2 px-4 mx-1 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
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
