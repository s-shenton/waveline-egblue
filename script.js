function createWave(direction = 'rtl', speed = 0.5) {
    const svg = document.querySelector('svg');
    const path = document.getElementById('wavePath');
    const pathFill = document.getElementById('wavePathFill');
    const width = svg.width.baseVal.value;
    const height = svg.height.baseVal.value;

    let phase = 0;

    function animateWave() {
        let d = direction === 'ltr' ? `M 0 ${height / 2}` : `M ${width} ${height / 2}`;
        let dFill = direction === 'ltr' ? `M 0 0` : `M ${width} 0`;

        if (direction === 'ltr') {
            for (let x = 0; x <= width; x += 10) {
                const y = Math.sin(x * 0.02 + phase) * 20 + (height / 2);
                d += ` L ${x} ${y}`;
                dFill += ` L ${x} ${y}`;
            }
        } else {
            for (let x = width; x >= 0; x -= 10) {
                const y = Math.sin(x * 0.02 + phase) * 20 + (height / 2);
                d += ` L ${x} ${y}`;
                dFill += ` L ${x} ${y}`;
            }
        }

        dFill += direction === 'ltr' ? ` L ${width} 0 Z` : ` L 0 0 Z`;

        path.setAttribute('d', d);
        pathFill.setAttribute('d', dFill);
        phase += (direction === 'ltr' ? 0.1 : -0.1) * speed;
        requestAnimationFrame(animateWave);
    }

    animateWave();
}

window.addEventListener('load', () => createWave('rtl', 0.5));