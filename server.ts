import { Server } from "http";
import express, { Request, Response } from "express";
import { renderToString } from "react-dom/server";
import { Routes, Route } from "react-router-dom";
import Home from "./src/pages/Home";

const app = express();
const server = new Server(app);

app.get("/", async (req: Request, res: Response) => {
  const markup = await renderToString(
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
  res.send(`
    <html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div id="root">${markup}</div>
        <script src="./client.js"></script>
      </body>
    </html>
  `);
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
