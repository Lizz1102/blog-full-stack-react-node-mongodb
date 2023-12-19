import express from "express";

let articlesInfo = [
  {
    name: "spirit-animal",
    upvotes: 0,
    comments: [],
  },
  {
    name: "liza-startup-ideas",
    upvotes: 0,
    comments: [],
  },
  {
    name: "the-art-of-joy",
    upvotes: 0,
    comments: [],
  },
];

const app = express();
app.use(express.json());

app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articlesInfo.find((a) => a.name === name);
  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
  } else {
    res.send(`Article doesn\'t exist!`);
  }
});

app.post("/api/articles/:name/comments", (req, res) => {
  const { name } = req.params;
  const { postedBy, text } = req.body;

  const article = articlesInfo.find((a) => a.name === name);
  if (article) {
    article.comments.push({ postedBy, text });
    res.send(article.comments);
  } else {
    res.send(`Article doesn\'t existXXXXX!`);
  }
});

app.listen(8000, () => {
  console.log("Server is listening on port 8000");
});
