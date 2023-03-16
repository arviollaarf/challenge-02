function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const display = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available == true) {
      display.push(cars[i]);
    }
  }
  console.log(display);

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return display;
}


