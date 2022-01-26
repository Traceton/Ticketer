
  import { useRouter } from "next/router";

export default function EditVehicle(props) {
  // router object from next
  const router = useRouter();

  const vehicleId = router.query.vehicleId;

  const updateVehicle = async (event) => {
    event.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/vehicles/${vehicleId}`, {
      body: JSON.stringify({
         year: event.target.year.value, make: event.target.make.value, model: event.target.model.value, miles: event.target.miles.value, listingPrice: event.target.listingPrice.value
      }),
      headers: {
        "User-Agent": "*",
        "Content-Type": "application/json",
      },
      method: "PATCH",
    });

    router.push(`/vehicles/${vehicleId}`)

  };

  const deleteVehicle = async (event) => {
    event.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/vehicles/${vehicleId}`, {

      headers: {
        "User-Agent": "*",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    });

    router.push(`/vehicles`)

  }

  return (
    <div className="bg-gray-700 h-screen">
      <div className="p-2">
        <div className=" m-4 p-4 rounded-md bg-gray-400 font-light space-y-8 ">
          <form onSubmit={updateVehicle}>
            <div>
              <h3 className="text-4xl leading-6 font-light text-gray-900">Edit Vehicle</h3>
            </div>

            <div className="text-xl mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
        <label htmlFor="year" className="block text-3xl font-light text-gray-700">
          year
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
          defaultValue={props.vehicle.year}
            type="text"
            name="year"
            id="year"
            autoComplete="year"
            className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
          />
        </div>
      </div><div className="sm:col-span-6">
        <label htmlFor="make" className="block text-3xl font-light text-gray-700">
          make
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
          defaultValue={props.vehicle.make}
            type="text"
            name="make"
            id="make"
            autoComplete="make"
            className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
          />
        </div>
      </div><div className="sm:col-span-6">
        <label htmlFor="model" className="block text-3xl font-light text-gray-700">
          model
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
          defaultValue={props.vehicle.model}
            type="text"
            name="model"
            id="model"
            autoComplete="model"
            className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
          />
        </div>
      </div><div className="sm:col-span-6">
        <label htmlFor="miles" className="block text-3xl font-light text-gray-700">
          miles
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
          defaultValue={props.vehicle.miles}
            type="text"
            name="miles"
            id="miles"
            autoComplete="miles"
            className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
          />
        </div>
      </div><div className="sm:col-span-6">
        <label htmlFor="listingPrice" className="block text-3xl font-light text-gray-700">
          listingPrice
        </label>
        <div className="mt-1 flex rounded-md shadow-sm">
          <input
          defaultValue={props.vehicle.listingPrice}
            type="text"
            name="listingPrice"
            id="listingPrice"
            autoComplete="listingPrice"
            className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
          />
        </div>
      </div>
              <div className="m-2 p-2 w-full">
                <div className="  flex justify-start">
                  <button
                    onClick={() => router.back()}
                    type="button"
                    className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Back
                  </button>
                  <button
                    onClick={deleteVehicle}
                    type="button"
                    className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Delete
                  </button>
                  <button
                    type="submit"
                    className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
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
    headers: {
      "User-Agent": "*",
      Accept: "application/json; charset=UTF-8",
    },
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



  