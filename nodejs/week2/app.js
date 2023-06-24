const express = require("express");
const app = express();
const documents = require("./documents.json");
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

app.get("/", (req, res) => {
  res.send("This is a search engine");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//GET /search
app.get("/search", (req, res) => {
  const { q } = req.query;
  //f q is not provided, the endpoint should return all documents.
  if (!q) {
    res.json(documents);
  } else {
    const searchResults = documents.filter((document) => {
      const documentValues = Object.values(document);
      return documentValues.some((value) => {
        if (
          typeof value === "string" &&
          value.toLocaleLowerCase().includes(q.toLocaleLowerCase())
        ) {
          return true;
        }
        return false;
      });
    });
    if (searchResults.length > 0) {
      res.json(searchResults);
    } else {
      res.status(400).json({ msg: `No documents found for the query: ${q}` });
    }
  }
});

//GET /documents/:id
app.get("/documents/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) res.status(400).json({ msg: "Id is not a number" });
  const document = documents.find((doc) => doc.id === parseInt(id));
  if (document) res.status(200).json(document);
  else
    res.status(404).json({ msg: `No document found with id ${req.params.id}` });
});

//POST /search
app.post("/search", (req, res) => {
  const { q } = req.query;
  const { fields } = req.body;
  console.log(q);
  if (q && fields) {
    return res
      .status(404)
      .json({ error: "both q and fields both can't be provided together." });
  }

  let results = documents;

  if (q) {
    results = results.filter((document) => {
      const documentValues = Object.values(document);

      return documentValues.some((value) => {
        typeof value === "string" && value.includes(q);
      });
    });
  } else if (fields) {
    results = results.filter((document) => {
      return Object.entries(fields).every(([field, value]) => {
        return document[field] === value;
      });
    });
  }

  res.json(results);
});
