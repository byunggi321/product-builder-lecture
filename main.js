
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberDisplay = document.querySelector('.number-display');

    const BALL_COLORS = [
        '#fbc400', // Yellow
        '#69c8f2', // Blue
        '#ff7272', // Red
        '#aaaaaa', // Gray
        '#b0d840', // Green
    ];

    const generateLottoNumbers = () => {
        numberDisplay.innerHTML = '';
        const numbers = new Set();

        while (numbers.size < 6) {
            const randomNumber = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNumber);
        }

        const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

        sortedNumbers.forEach((number, index) => {
            setTimeout(() => {
                const ball = document.createElement('div');
                ball.classList.add('lotto-ball');
                ball.textContent = number;
                
                let colorIndex = Math.floor((number - 1) / 10);
                ball.style.backgroundColor = BALL_COLORS[colorIndex];

                ball.style.animationDelay = `${index * 0.1}s`;

                numberDisplay.appendChild(ball);
            }, index * 200); 
        });
    };

    generateBtn.addEventListener('click', generateLottoNumbers);

    // Initial generation on page load
    generateLottoNumbers();
});
