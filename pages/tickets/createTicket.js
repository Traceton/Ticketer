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
    <>
      <div className="bg-gray-900 min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            New ticket
          </h2>
        </div>

        <div className=" mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-gray-800 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={createNewTicket}>
              <div>
                <label
                  htmlFor="state"
                  className="block text-sm font-medium text-white"
                >
                  State
                </label>
                <div className="mt-1">
                  <input
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
                  Title
                </label>
                <div className="mt-1">
                  <input
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
                  Description
                </label>
                <div className="mt-1">
                  <textarea
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
                  Author
                </label>
                <div className="mt-1">
                  <input
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
                  type="submit"
                  className=" flex grow justify-center py-2 px-4 mx-1 border border-gray-900 rounded-md shadow-sm text-sm font-medium text-white bg-none hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
