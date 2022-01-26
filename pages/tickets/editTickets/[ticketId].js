
    import { useRouter } from "next/router";
  
  export default function EditTicket(props) {
    // router object from next
    const router = useRouter();
  
    const ticketId = router.query.ticketId;
  
    const updateTicket = async (event) => {
      event.preventDefault();
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets/${ticketId}`, {
        body: JSON.stringify({
           title: event.target.title.value, description: event.target.description.value, author: event.target.author.value, state: event.target.state.value
        }),
        headers: {
          "User-Agent": "*",
          "Content-Type": "application/json",
        },
        method: "PATCH",
      });
  
      router.push(`/tickets/${ticketId}`)
  
    };
  
    const deleteTicket = async (event) => {
      event.preventDefault();
  
      const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets/${ticketId}`, {
  
        headers: {
          "User-Agent": "*",
          "Content-Type": "application/json",
        },
        method: "DELETE",
      });
  
      router.push(`/tickets`)
  
    }
  
    return (
          <div>
            <form onSubmit={updateTicket}>
              <div>
                <h3>Edit Ticket</h3>
              </div>
  
              <div>
              <div>
        <label htmlFor="title">
          title
        </label>
        <div>
          <input
          defaultValue={props.ticket.title}
            type="text"
            name="title"
            id="title"
            autoComplete="title"
          />
        </div>
      </div><div>
        <label htmlFor="description">
          description
        </label>
        <div>
          <input
          defaultValue={props.ticket.description}
            type="text"
            name="description"
            id="description"
            autoComplete="description"
          />
        </div>
      </div><div>
        <label htmlFor="author">
          author
        </label>
        <div>
          <input
          defaultValue={props.ticket.author}
            type="text"
            name="author"
            id="author"
            autoComplete="author"
          />
        </div>
      </div><div>
        <label htmlFor="state">
          state
        </label>
        <div>
          <input
          defaultValue={props.ticket.state}
            type="text"
            name="state"
            id="state"
            autoComplete="state"
          />
        </div>
      </div>
                <div>
                  <div>
                    <button
                      onClick={() => router.back()}
                      type="button"
                    >
                      Back
                    </button>
                    <button
                      onClick={deleteTicket}
                      type="button"
                    >
                      Delete
                    </button>
                    <button
                      type="submit"
                    >
                      Save
                    </button>
                  </div>
                </div>
  
              </div>
            </form>
          </div>
    );
  }
  
  export const getServerSideProps = async (context) => {
    // fetch ticket data from api here
    const ticketId = context.params.ticketId;
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/tickets/${ticketId}`, {
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
        ticket: data.ticket,
      },
    };
  };
  
  
  
    