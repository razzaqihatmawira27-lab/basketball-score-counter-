// Initialize scores at 0
let homeScore = 0
let guestScore = 0

// Get the display elements from the DOM
let homeStoreEl = document.getElementById("home-score")
let guestStoreEl = document.getElementById("guest-score")

// Function for Home team
function addHome(points) {
    homeScore += points
    homeStoreEl.textContent = homeScore
}

// Function for Guest team
function addGuest(points) {
    guestScore += points
    guestStoreEl.textContent = guestScore
}