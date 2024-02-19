import {
  type LoaderFunctionArgs,
  json,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { Form, useLoaderData, useParams } from "@remix-run/react";
import { db } from "~/utils/db.server";
export async function loader({ params }: LoaderFunctionArgs) {
  //   console.log(await db.comment.findMany());
  const data = await db.comment.findMany();
  //   console.log("data ", data);
  // {
  //     where: {
  //       movieId: params.id,
  //     },
  //     orderBy: {
  //       createdAt: "desc",
  //     },
  //   }
  return json({ data });
}

export async function action({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  //   const data = db.comment.create({
  //     message: formData.get("comment") as string,
  //     movieId: formData.get("movieid") as string,
  //   });
  //   return json({ data });
  return 1;
}
const MovieComments = () => {
  const { id } = useParams();
  const { data } = useLoaderData<typeof loader>();
  //   console.log(data);
  return (
    <div className="rounded-lg border p-3">
      <h1 className="text-xl font-semibold mb-5">Your Opinion</h1>
      <div>
        <Form method="POST">
          <textarea
            name="comment"
            className="w-full border border-teal-500 rounded-lg p-2"
          ></textarea>
          <input type="hidden" name="movieid" value={id} />
          <button
            type="submit"
            className="bg-teal-500 px-4 py-2 rounded-lg text-white"
          >
            comment
          </button>
        </Form>
        <div className="mt-5 flex flex-col gap-y-3">
          {data?.map((post) => (
            <div key={post?.id}>
              <p>{post?.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieComments;
