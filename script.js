function generateQuote() {
    const quotes = [
        "Believe in yourself.",
        "Small progress is still progress.",
        "Stay consistent and never give up.",
        "Dream big. Work hard.",
        "You are capable of amazing things."
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}
