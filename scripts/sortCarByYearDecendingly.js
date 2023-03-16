function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const carDec = [...cars];

  // Tulis code-mu disini
  for(let i = 0; i < carDec.length; i++) {
    for(let j = 0; j < carDec.length-1; j++) {
      if (carDec[j].year < carDec[j+1].year) {
        let temp = carDec[j];
        carDec[j] = carDec[j+1];
        carDec[j+1] = temp;
      }
    }
  }

  // Rubah code ini dengan array hasil sorting secara descending
  console.log(carDec);
  return carDec;
}
