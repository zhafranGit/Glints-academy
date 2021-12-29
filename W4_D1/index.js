const express = require("express");
const fs = require("fs");
const app = express();
const port = 5000;

app.use(express.json());

// berisi request yang bersifat menyimpan data
app.post("/:fileName", (req, res) => {
  const data = req.body;
  const { fileName } = req.params;
  fs.writeFile(`tmp/${fileName}.json`, JSON.stringify(data), (err) => {
    if (err) {
      return res.status(500).json({
        "status": "failed",
        message: "failed to create file",
        code: 500,
        result: {},
      });
    }
    return res.status(201).json({
      message: "file created successfuly",
      status: "success",
      code: 500,
      result: {},
    });
  });
});

app.get("/:fileName", (req, res) => {
  const { fileName } = req.params;
  fs.readFile(`tmp/${fileName}.json`, { encoding: "utf-8" }, (err, data) => {
    if (err) {
      return res.status(500).json({
        status: "failed",
        message: err.message,
        code: 500,
        result: {},
      });
    }
    console.log("satu");
    return res.status(200).json({
      status: "success",
      code: 200,
      message: "Successfully retrieve the data",
      result: JSON.parse(data),
    });
  });
  console.log("dua");
});

app.put("/:fileName", (req, res) => {
  const body = req.body;
  fs.readFile(`tmp/${req.params.fileName}.json`, (err, data) => {
    if (err) {
      return res.status(404).json({
        status: "failed",
        message: "no such file in directory",
        code: 404,
        result: {},
      });
    }
    fs.writeFile(`tmp/${req.params.fileName}.json`, JSON.stringify(body), (err) => {
      if (err) {
        return res.status(500).json({
          status: "failed",
          message: err.message,
          code: 500,
          result: {},
        });
      }
      return res.status(200).json({
        status: "success",
        message: "successfully update the file",
        code: 200,
        result: {},
      });
    });
  });
});

app.delete("/:fileName", (req, res) => {
  fs.unlink(`tmp/${req.params.fileName}.json`, (err) => {
    if (err) {
      return res.status(404).json({
        status: "failed",
        message: "file not found",
        code: 404,
        result: {},
      });
    }
    return res.status(200).json({
      status: "success",
      message: "file deleted successfully",
      code: 200,
      result: {},
    });
  });
});

app.patch("/:before/:after", (req, res) => {
  const { before, after } = req.params;
  fs.rename(`tmp/${before}.json`, `tmp/${after}.json`, (err) => {
    if (err) {
      return res.status(500).json({
        status: "failed",
        code: 500,
        result: {},
        message: err.message,
      });
    }
    return res.status(200).json({
      status: "success",
      code: 200,
      result: {},
      message: "Successfully rename the file",
    });
  });
});

app.listen(port, () => {
  console.log(`Server started on port`, port);
});
