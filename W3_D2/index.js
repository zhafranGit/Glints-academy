// ! ini untuk mengimport file beli js kedalam index
const beli = require('./beli')
const w2d5 = require('')

// ! make a list phone
const listPhone = [
    {
        item: "IpongXL", 
        price: 5000000, 
        time: 2000
    }, 
    {
        item: "SiomayPocoPoco", 
        price: 3200000, 
        time: 1000
    }, {
        item: "Mitu", 
        price: 1250000, 
        time: 1600
    }, {
        item: "Huahaha", 
        price: 6000000, 
        time: 1700
    }, {
        item: "SamsulSTingTing", 
        price: 8200000, 
        time: 2300
    }
]

// ! pemanggilan callback
beli(15000000, listPhone[0], (kembalian) => {
    beli(kembalian, listPhone[1], (kembalian) => {
        beli(kembalian, listPhone[2],(kembalian) => {
            beli(kembalian,listPhone[3], (kembalian) => {
                beli(kembalian,listPhone[4], (kembalian) => {
                })
            })
        })
    })
})