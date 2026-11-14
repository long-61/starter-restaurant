const reservationForm = document.getElementById("reservation-form");

if (reservationForm) {
    reservationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const reservationMessage = document.getElementById('reservation-message');
        const partySize = document.getElementById('party-size').value;

        reservationMessage.textContent =
            `Practice reservation received for ${partySize} guests`;

        reservationForm.reset();
    });
}

