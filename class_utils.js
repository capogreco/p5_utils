let roll = []

Papa.parse (`roll.csv`, {
  download: true,
  complete: r => csv2roll (r),
})

function csv2roll (r) {
  r[`data`].forEach ((e, i) => {
   if (!e[1]) return
   if (e[1] == "PreferredName") return
   roll.push (e[1]) 
  })
}

function rand_student () {
  let student = rand_el (roll)
  return student
}

function rand_el (a) {
   return a[rand_int (a.length)]
}

function rand_int (m) {
   return Math.floor (Math.random () * m)
}


function countdown (s) {
  if (s < 0) {
    console.log (`!!! time's up !!!`)
    return 
  }
  else {
    console.log (s)
    setTimeout (() => countdown (s - 1), 1000)
    return `counting down from ${ s }, starting now!`
  }
}
