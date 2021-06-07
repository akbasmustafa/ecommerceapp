import Express from "express";

const app = Express();
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));

// GET POST PUT DELETE
app.get("/", (req, res) => {
  //res.send("Hello!");
  res.json({ message: "Hello World" });
});

app.post("/add", (req, res) => {
  res.json(req.body);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("listening port:", PORT));
