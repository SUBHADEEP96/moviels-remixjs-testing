import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

export async function loader({ params }: LoaderFunctionArgs) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${params?.id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMmZjYzBlZDIxOWRhMWExMGM5NGJlYWYzZjg3ZDc4MCIsInN1YiI6IjY1ZDJmNDFiMzg3NjUxMDE4NjMxZTZjZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UiSa0sCh0vjdahtAww7dHQL3T9GloSkeKoFpm8xrytw",
      },
    }
  );
  return json(await url?.json());
}

export default function MovieId() {
  const data: any = useLoaderData();
  return (
    <div className="min-h-screen p-10">
      <img
        src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`}
        alt={data?.title}
        className="h-[40vh] object-cover w-full rounded-lg"
      />
      <h1 className="text-4xl font-bold text-center pt-6">{data?.title}</h1>
      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-medium">
          <h1>
            <span className="underline">Homepage:</span>&nbsp;
            <Link to={data?.homepage} target="_blank">
              Link
            </Link>
          </h1>
          <h1>
            <span className="underline">Original Language:</span>
            &nbsp; {data?.original_language}
          </h1>
          <p>
            <span className="underline">Overview:</span>
            &nbsp; {data?.overview}
          </p>
          <p>
            <span className="underline">Release Date:</span>
            &nbsp;{data?.release_date}
          </p>
        </div>
        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
