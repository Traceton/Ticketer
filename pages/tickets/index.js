import Link from "next/link";

export default function Ticket(props) {
  return (
    <>
      <div className="h-screen p-2 rounded-md bg-gray-900 font-light">
        <div className="">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-center">
              <h3 className=" m-1 p-1 text-4xl leading-6 font-light text-white">
                Tickets
              </h3>
            </div>

            <div className="m-2 p-2 w-full">
              <div className="pt-2 flex justify-end">
                <Link href="/tickets/createTicket">
                  <a className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white border-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    +
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col m-0">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 b-none align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-800 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-800">
                  <thead className="bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        State
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Description
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                      >
                        Author
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">View</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-gray-700 divide-y divide-gray-800">
                    {props.tickets.map((ticket) => (
                      <tr key={ticket._id}>
                        <td className="px-2 py-4 whitespace-nowrap text-md text-gray-200">
                          {ticket.state}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-md text-gray-200">
                          {ticket.title}
                        </td>
                        <td className="truncate max-w-xs px-2 py-4 whitespace-nowrap text-md text-gray-200">
                          {ticket.description}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-md text-gray-200">
                          {ticket.author}
                        </td>
                        <td className="px-2 py-4 whitespace-nowrap text-right font-light text-md flex justify-end">
                          <Link href={"/tickets/" + ticket._id}>
                            <a className="m-1 inline-flex justify-center  px-2 border border-gray-900 shadow-sm  font-light rounded-md text-white border-gray-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              View
                            </a>
                          </Link>
                          <Link href={"/tickets/editTickets/" + ticket._id}>
                            <a className="m-1 inline-flex justify-center  px-2 border border-gray-900 shadow-sm  font-light rounded-md text-white border-gray-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                              Edit
                            </a>
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  // fetch ticket data from api here
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets`, {
    method: "GET",
    headers: {
      "User-Agent": "*",
      Accept: "application/json; charset=UTF-8",
    },
  });

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      tickets: data.tickets,
    },
  };
};
