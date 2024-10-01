const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const movieSelect = document.getElementById('movie');
const countDisplay = document.getElementById('count');
const totalDisplay = document.getElementById('total');
const bookSeatsButton = document.getElementById('bookSeats');
const paymentMessage = document.getElementById('paymentMessage');

let ticketPrice = 0;

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateTotalAndCount();
});

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (!seat.classList.contains('occupied')) {
            seat.classList.toggle('selected');
            updateTotalAndCount();
        }
    });
});

function updateTotalAndCount() {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const seatCount = selectedSeats.length;
    countDisplay.innerText = seatCount;
    totalDisplay.innerText = seatCount * ticketPrice;
}

bookSeatsButton.addEventListener('click', () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    if (selectedSeats.length > 0) {
        selectedSeats.forEach(seat => {
            seat.classList.remove('selected');
            seat.classList.add('occupied');
        });
        paymentMessage.style.display = 'block';
        updateTotalAndCount();
    } else {
        alert('Please select at least one seat.');
    }
});
