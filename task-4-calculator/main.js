    const toggle = document.getElementById("themeToggle");
    const circle = toggle.querySelector(".circle");
    const numbers = document.querySelectorAll(".toggle-number");

    let currentState = 1;

    function updateToggle(state) {
    currentState = state;
    const position = (state - 1) * 20; // 0, 20, 40 px for 3 states
    circle.style.left = `${position}px`; // +2 for padding

    numbers.forEach((n) => n.classList.remove("active"));
    document.querySelector(`.toggle-number[data-value="${state}"]`).classList.add("active");
}

    toggle.addEventListener("click", () => {
    let nextState = currentState === 3 ? 1 : currentState + 1;
    updateToggle(nextState);
});

    numbers.forEach((n) => {
    n.addEventListener("click", () => updateToggle(parseInt(n.dataset.value)));
});

    // Init
    updateToggle(currentState);
