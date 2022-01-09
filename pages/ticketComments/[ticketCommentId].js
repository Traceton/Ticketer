
  import Link from 'next/link'
import { useRouter } from "next/router";

export default function TicketCommentDetails(props) {
  // router object from next
  const router = useRouter();

  const ticketComment = props.ticketComment

  return (
    <div className="bg-gray-700 h-screen">
      <div className="p-2">
        <div className=" m-4 p-4 rounded-md bg-gray-400 font-light space-y-8 ">
          <form >
            <div>
              <h3 className="text-4xl leading-6 font-light text-gray-900">Show TicketComment</h3>
            </div>

            <div className="text-xl mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-6"><label htmlFor="ticket" className="block text-3xl font-light text-gray-700">ticket</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.ticketComment.ticket}</h1></div></div><div className="sm:col-span-6"><label htmlFor="content" className="block text-3xl font-light text-gray-700">content</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.ticketComment.content}</h1></div></div><div className="sm:col-span-6"><label htmlFor="author" className="block text-3xl font-light text-gray-700">author</label><div className="mt-1 flex rounded-md shadow-sm"><h1 id="year">{props.ticketComment.author}</h1></div></div>
              <div className="m-2 p-2 w-full">
                <div className="  flex justify-start">
                  <button
                    onClick={() => router.back()}
                    type="button"
                    className="m-1 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-xl font-light rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Back
                  </button>
                  <Link href={"/ticketComments/editTicketComments/" + ticketComment._id}>
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
  // fetch ticketComment data from api here
  const ticketCommentId = context.params.ticketCommentId;
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST_URL}/api/ticketComments/${ticketCommentId}`, {
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
      ticketComment: data.ticketComment,
    },
  };
};
  