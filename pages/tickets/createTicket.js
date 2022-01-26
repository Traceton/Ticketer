import { useRouter } from "next/router";
import React from "react";

export default function CreateTicket() {
  const router = useRouter();
  const createNewTicket = async (event) => {
    event.preventDefault();

    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets`, {
      body: JSON.stringify({
        title: event.target.title.value,
        description: event.target.description.value,
        author: event.target.author.value,
        state: event.target.state.value,
      }),
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "*",
      },
      method: "POST",
    });

    router.push(`/tickets`);
  };

  return (
    <div className="bg-gray-900 h-screen font-light">
      <div className="p-2">
        <div className=" m-4 p-4 rounded-md font-light space-y-8 ">
          <form onSubmit={createNewTicket}>
            <div className="flex flex-col justify-center">
              <h3 className=" m-1 p-1 text-4xl leading-6 font-light text-white">
                Create New Ticket
              </h3>
            </div>

            <div className="text-xl mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6">
                <label
                  htmlFor="title"
                  className="block text-3xl font-light text-white"
                >
                  title
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="title"
                    id="title"
                    autoComplete="title"
                    className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="description"
                  className="block text-3xl font-light text-white"
                >
                  description
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="description"
                    id="description"
                    autoComplete="description"
                    className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="author"
                  className="block text-3xl font-light text-white"
                >
                  author
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="author"
                    id="author"
                    autoComplete="author"
                    className="shadow-sm  border border-transparent block h-10 w-full text-xl font-light sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
              <div className="sm:col-span-6">
                <label
                  htmlFor="state"
                  className="block text-3xl font-light text-white"
                >
                  state
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    type="text"
                    name="state"
                    id="state"
                    autoComplete="state"
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
