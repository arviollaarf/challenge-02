function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect? 
  const carAsc = [...cars];

  // Tulis code-mu disini
  for(let i = 0; i < carAsc.length; i++) {
    for(let j = 0; j < carAsc.length-1; j++) {
      if (carAsc[j].year > carAsc[j+1].year) {
        let temp = carAsc[j];
        carAsc[j] = carAsc[j+1];
        carAsc[j+1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara ascending
  console.log(carAsc);
  return carAsc;
}
