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
    <div className="bg-gray-800 text-white p-2 h-screen">
      <form onSubmit={createNewTicket}>
        <div>
          <h3>Create New Ticket</h3>
        </div>

        <div>
          <div>
            <label htmlFor="title">title</label>
            <div>
              <input type="text" name="title" id="title" autoComplete="title" />
            </div>
          </div>
          <div>
            <label htmlFor="description">description</label>
            <div>
              <input
                type="text"
                name="description"
                id="description"
                autoComplete="description"
              />
            </div>
          </div>
          <div>
            <label htmlFor="author">author</label>
            <div>
              <input
                type="text"
                name="author"
                id="author"
                autoComplete="author"
              />
            </div>
          </div>
          <div>
            <label htmlFor="state">state</label>
            <div>
              <input type="text" name="state" id="state" autoComplete="state" />
            </div>
          </div>
          <div>
            <div>
              <button onClick={() => router.back()} type="button">
                Back
              </button>
              <button type="submit">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
