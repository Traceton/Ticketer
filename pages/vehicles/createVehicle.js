
  import { useRouter } from 'next/router'
import React from "react";

export default function CreateVehicle() {
  const router = useRouter()
  const createNewVehicle = async (event) => {
    event.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/vehicles`, {
      body: JSON.stringify({
         year: event.target.year.value, make: event.target.make.value, model: event.target.model.value, miles: event.target.miles.value, listingPrice: event.target.listingPrice.value
      }),
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "*"
      },
      method: "POST",
    });

    router.push(`/vehicles`)

  };

  return (
    <div className="bg-gray-700 h-screen">
      <div className="p-2">
        <div className=" m-4 p-4 rounded-md bg-gray-400 font-light space-y-8 ">
          <form onSubmit={createNewVehicle}>
            <div>
              <h3 className="text-4xl leading-6 font-light text-gray-900">Create New Vehicle</h3>
            </div>

            <div className="text-xl mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-6">
                          <label htmlFor="year" className="block text-3xl font-light text-gray-700">
                            year
                          </label>
                          <div className="mt-1 flex rounded-md shadow-sm">
                            <input
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
  