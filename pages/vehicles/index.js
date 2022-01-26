
    import Link from 'next/link'

    export default function Vehicle(props) {
      return (
      <>
            <div className="h-screen p-2 rounded-md bg-gray-900 font-light">

              <div className=''>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col justify-center">
                      <h3 className=" m-1 p-1 text-4xl leading-6 font-light text-white">Vehicles</h3>
                  </div>

                  <div className="m-2 p-2 w-full">
                    <div className="pt-2 flex justify-end">
                      <Link href="/vehicles/createVehicle">
                        <a className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white border-gray-500 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
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
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Listing Price
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Year
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Make
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Model
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                            >
                              Miles
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">View</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-700 divide-y divide-gray-800">
                          {props.vehicles.map((vehicle) => (
                            <tr key={vehicle._id}>
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">${vehicle.listingPrice}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{vehicle.year}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{vehicle.make}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{vehicle.model}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-md text-gray-200">{vehicle.miles}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-right font-light text-md flex justify-end">
                                <Link href={"/vehicles/" + vehicle._id} >
                                  <a className="m-1 inline-flex justify-center  px-2 border border-transparent shadow-sm  font-light rounded-md text-white border-gray-500 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                                    View
                                  </a>
                                </Link>
                                <Link href={"/vehicles/editVehicles/" + vehicle._id} >
                                <a className="m-1 inline-flex justify-center  px-2 border border-transparent shadow-sm  font-light rounded-md text-white border-gray-500 hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
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
      // fetch vehicle data from api here
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/vehicles`, {
        method: "GET",
        headers: {
          "User-Agent": "*",
          Accept: "application/json; charset=UTF-8",
        }
      });

      const data = await res.json();

      if (!data) {
        return {
          notFound: true,
        };
      }

      return {
        props: {
          vehicles: data.vehicles,
        },
      };
    };
  