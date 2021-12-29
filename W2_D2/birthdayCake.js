function cake(x, y){
    let even = 0, odd = 0, total = 0
    y = y.split('')
    for (i = 1; i <= y.length; i++){
      //cek index ganjil
      if ([i] % 2 === 1) {
        odd += y[i-1].charCodeAt()
      } else {
        even += i
      }
    }
    total = even + odd
    if(x * 0.7 >= total){
      console.log ('That was close!')
    } else console.log ('Fire!')
}

cake (900, 'abcdef')
cake (256, 'aaaaaddddr')