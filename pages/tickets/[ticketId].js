import Link from "next/link";
import { useRouter } from "next/router";

export default function TicketDetails(props) {
  // router object from next
  const router = useRouter();

  const ticket = props.ticket;

  return (
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            View ticket
          </h2>
        </div>

        <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="number"
                  className="block text-sm font-bold text-white"
                >
                  number
                </label>
                <div className="mt-1">
                  <h3
                    id="number"
                    name="number"
                    className="appearance-none block w-full px-3 py-2 bg-gray-800 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-200"
                  >
                    {props.ticket.number}
                  </h3>
                </div>
              </div>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-bold text-white"
                >
                  state
                </label>
                <div className="mt-1">
                  <h3
                    id="state"
                    name="state"
                    className="appearance-none block w-full px-3 py-2 bg-gray-800 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-200"
                  >
                    {props.ticket.state}
                  </h3>
                </div>
              </div>
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-bold text-white"
                >
                  title
                </label>
                <div className="mt-1">
                  <h3
                    id="title"
                    name="title"
                    className="appearance-none block w-full px-3 py-2 bg-gray-800 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-200"
                  >
                    {props.ticket.title}
                  </h3>
                </div>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-bold text-white"
                >
                  description
                </label>
                <div className="mt-1">
                  <h3
                    id="description"
                    name="description"
                    className="appearance-none block w-full px-3 py-2 bg-gray-800 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-200"
                  >
                    {props.ticket.description}
                  </h3>
                </div>
              </div>
              <div>
                <label
                  htmlFor="author"
                  className="block text-sm font-bold text-white"
                >
                  author
                </label>
                <div className="mt-1">
                  <h3
                    id="author"
                    name="author"
                    className="appearance-none block w-full px-3 py-2 bg-gray-800 border-0 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-gray-200"
                  >
                    {props.ticket.author}
                  </h3>
                </div>
              </div>
              <div className="flex flex-row ">
                <Link href={"/tickets"}>
                  <a className=" flex justify-center py-2 px-4 mx-1 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Home
                  </a>
                </Link>
                <Link href={"/tickets/editTickets/" + ticket._id}>
                  <a className=" flex grow justify-center py-2 px-4 mx-1 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    Edit
                  </a>
                </Link>
              </div>
            </div>
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
