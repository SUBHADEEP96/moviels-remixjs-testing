import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./tailwind.css";
import styles from "./app.css";

import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav className="px-10 pt-5">
        <Link to="/" prefetch="intent" className="text-2xl font-semibold">
          📽️<span className="text-teal-400 text-sm">Cart</span>
        </Link>
      </nav>
      <main>{children}</main>
    </>
  );
}
