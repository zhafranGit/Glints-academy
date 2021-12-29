const bacaBuku = require('./callback')
//! memanggil file callback.js 

const buku = [
  {
    name: "Filosofi Teras",
    timeSpent: 2000,
    //! coba melihat callback berjalan
  },
  {
    name: "Matematika Dasar",
    timeSpent: 6000,
  },
  {
    name: "Fisdas",
    timeSpent: 3000,
  },
  {
    name: "Kimdas",
    timeSpent: 10000,
  }
]

bacaBuku(12000,buku[0],(cb) => {
  bacaBuku(cb, buku[1], (cb) => {
    bacaBuku(cb, buku[2], (cb) => {
      bacaBuku(cb, buku[3], (cb) => {
      })
    })
  })
})