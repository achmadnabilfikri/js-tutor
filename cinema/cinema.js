const theaterSeats = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];

function bookSeat(row, col) {
  if (theaterSeats[row][col] === "O") {
    theaterSeats[row][col] = "X";
    updateSeatStatus(row, col, "booked");
    alert(`seat ${String.fromCharCode(65 + row)}${col + 1} is booked`);
  } else {
    alert(`Seat ${String.fromCharCode(65 + row)}${col + 1} is already taken.`);
  }
}

function updateSeatStatus(row, col, status) {
  const seats = document.getElementsByClassName("seat");
}
