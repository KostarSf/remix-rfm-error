import { Links, Meta, Scripts } from "@remix-run/react";
import Marquee from "react-fast-marquee";

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <h1>Marquee Error</h1>
        <Marquee autoFill>
          <p style={{ marginRight: "1rem" }}>Some marquee text</p>
        </Marquee>

        <Scripts />
      </body>
    </html>
  );
}
