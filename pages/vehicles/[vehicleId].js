
  import Link from 'next/link'
import { useRouter } from "next/router";

export default function VehicleDetails(props) {
  // router object from next
  const router = useRouter();

  const vehicle = props.vehicle

  return (
    <div className="bg-gray-700 h-screen">
      <div className="p-2">
        <div className=" m-4 p-4 rounded-md bg-gray-400 font-light space-y-8 ">
          <form >
            <div>
              <h3 className="text-4xl leading-6 font-light text-gray-900">Show Vehicle</h3>
            </div>

            <div className="text-xl mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6"><label htmlFor="year" className="block text-3xl font-light text-gray-700">year</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.vehicle.year}</h1></div></div><div className="sm:col-span-6"><label htmlFor="make" className="block text-3xl font-light text-gray-700">make</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.vehicle.make}</h1></div></div><div className="sm:col-span-6"><label htmlFor="model" className="block text-3xl font-light text-gray-700">model</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.vehicle.model}</h1></div></div><div className="sm:col-span-6"><label htmlFor="miles" className="block text-3xl font-light text-gray-700">miles</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.vehicle.miles}</h1></div></div><div className="sm:col-span-6"><label htmlFor="listingPrice" className="block text-3xl font-light text-gray-700">listingPrice</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.vehicle.listingPrice}</h1></div></div>
              <div className="m-2 p-2 w-full">
                <div className="  flex justify-start">
                  <button
                    onClick={() => router.back()}
                    type="button"
                    className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Back
                  </button>
                  <Link href={"/vehicles/editVehicles/" + vehicle._id}>
                    <a className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" >
                      Edit
                    </a>
                  </Link>
                </div>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


export const getServerSideProps = async (context) => {
  // fetch vehicle data from api here
  const vehicleId = context.params.vehicleId;
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/vehicles/${vehicleId}`, {
    method: "GET"
  });

  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      vehicle: data.vehicle,
    },
  };
};
  