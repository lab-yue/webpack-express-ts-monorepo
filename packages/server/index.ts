import express from "express";

const startServer = () => {
  const app = express();

  app.get("/", (_, res) => {
    res.send("ok");
  });

  app.listen(3000, () => {
    console.log("listening on 3000");
  });
};

export default startServer;
