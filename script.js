const btn = document.getElementById('mover-btn');
const card = btn.closest('.card'); // Find the card element

function randomPosition() {
    // Calculate available space for the button inside the card
    const cardRect = card.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    // Determine random position within card boundaries
    const x = Math.floor(Math.random() * (cardRect.width - btnRect.width));
    const y = Math.floor(Math.random() * (cardRect.height - btnRect.height));

    return { x, y };
}

function moveBtn() {
    const { x, y } = randomPosition();
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
}

btn.addEventListener('mouseover', moveBtn);
btn.addEventListener('click', moveBtn);



