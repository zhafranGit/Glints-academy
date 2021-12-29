const express = require('express');
// ! require file system yg berada dlm computer kita
const fs = require('fs')
const app = express();
const port = 5000;

app.use(express.json())

// ! req -> request , res -> response
app.listen(port, (req,res) => {
  console.log(`server is listen on port: ${port}`);
})

// ! membaca data atau mendapatkan data
app.get('/', (req,res) => {
  // res.send('Ini app baru!')
  // ! . untuk keluar dari file 
  // ! .. keluar 2 tingkat dari file 
  // ? param 1 -> path file yg mau dibaca
  // ? param 2 -> encoding utf 8
  //? param 3 -> callback (req,res)
  fs.readFile('./tmp/todo.json', { encoding : "utf-8"}, (err,data) => {
    // ! ketika dia mengeluarkan error
    if (err) {
      return res.status(500).json({
        status : "failed",
        code : 500,
        msg : "internal server is an error!"
      })
    }
    // ! ketika data nya tersedia 
    return res.status(200).json({
        status : "success",
        code : 200,
        msg : "server is on!",
        result: JSON.parse(data)
    })
  })
})


// ! post -> mengirim / menyimpan data

app.post('/', (req,res) => {
  const data = req.body;
  fs.writeFile('./tmp/todo.json', JSON.stringify(data), (err) => {
    // ! ketika error
    if (err) {
      return res.status(500).json({
        status : "failed",
        code : 500,
        msg : "internal server is an error!"
      })
    }

    //! ketika tidak error
    return res.status(201).json({
        status : "todo created successfully!",
        code : 201,
        msg : "server is on!",
        result: {}
    })
  })
})

// ! put -> untuk mengubah semua entitas yg ada
app.put('/', (req,res) => {
  const body = req.body;
  fs.readFile('./tmp/todo.json', (err,data) => {
    // ! ketika error 
    if (err) {
      return res.status(404).json({
        status : "failed",
        code : 404,
        msg : "cannot find the todo lists!",
        result : {}
      })
    }

    //! ketika datanya tersedia
    fs.writeFile('./tmp/todo.json', JSON.stringify(body), (err) => {
      if (err) {
        return res.status(500).json({
          status : "failed",
          code : 500,
          msg : "internal server is an error!",
          result : {}
        })
      }

      return res.status(200).json({
        status : "todo updated successfully!",
        code : 200,
        msg : "server is on!",
        result: {}
      })
    })
  })
})

// ! delete -> menghapus 
app.delete('/', (req,res) => {
  fs.unlink('./tmp/todo.json', (err) => {
    if (err) {
      return res.status(404).json({
        status : "data isn't found",
        code : 404,
        msg : "internal server is an error!",
        result : {}
      })
    }

    return res.status(200).json({
      status : "todo deleted successfully!",
      code : 200,
      msg : "server is on!",
      result: {}
    })
  })
})


// ! patch -> mengubah 1 atau beberapa entitas
app.patch('/:before/:after', (req,res) => {
  // const before = req.params;
  // const after = req.params;
  // ! destructuring
  const {before, after} = req.params;
  fs.rename(`./tmp/${before}.json`,`./tmp/${after}.json`, (err) => {
    if (err) {
      return res.status(404).json({
        status : "cannot rename the data",
        code : 404,
        msg : "data isn't found!",
        result : {}
      })
    }

    return res.status(200).json({
      status : "todo renamed successfully!",
      code : 200,
      msg : "server is on!",
      result: {}
    })
  })
})