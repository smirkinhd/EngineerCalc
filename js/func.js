let isRadians = true;
let enteringExponent = false;

    function appendToDisplay(value) {
        let display = document.getElementById('display');
        
        if (value === '.') {
            if (display.innerText.includes('.')) {
                return;
            }
        }
        if (display.innerText === '0' && value !== '.') {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
    }


    function clearDisplay() {
        document.getElementById('display').innerText = '0';
    }

    function backspace() {
        let display = document.getElementById('display');
        display.innerText = display.innerText.slice(0, -1);
        if (display.innerText === '') {
            display.innerText = '0';
        }
    }

    function calculate() {
        let display = document.getElementById('display');
        let expression = display.innerText;
        
        try {
            if (expression.includes("^")) {
                let parts = expression.split("^");
                let base = parseFloat(parts[0]);
                let exponent = parseFloat(parts[1]);
                display.innerText = Math.pow(base, exponent);
            } else {
                display.innerText = eval(expression);
            }
        } catch (e) {
            display.innerText = 'Error';
        }
    }

    function toggleRadDeg() {
        isRadians = !isRadians;
        let modeButton = document.querySelector('button[onclick="toggleRadDeg()"]');
        modeButton.innerText = isRadians ? 'rad' : 'deg';
    }
    

    function calculateSin() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        if (!isRadians) {
            value = value * (Math.PI / 180); 
        }
        display.innerText = Math.sin(value);
    }

    function calculateCos() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        if (!isRadians) {
            value = value * (Math.PI / 180); 
        }
        display.innerText = Math.cos(value);
    }

    function calculateTan() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        if (!isRadians) {
            value = value * (Math.PI / 180);  
        }
        display.innerText = Math.tan(value);
    }

    function calculateCtg() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        if (!isRadians) {
            value = value * (Math.PI / 180);  
        }
        let tanValue = Math.tan(value);
        if (tanValue === 0) {
            display.innerText = 'Infinity'; 
        } else {
            display.innerText = 1 / tanValue;
        }
    }

    function calculatePower() {
        let display = document.getElementById('display');
        if (display.innerText.includes("^")) {
            return; 
        }
        display.innerText += "^";
    }

    function calculateLg() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        display.innerText = Math.log10(value);
    }

    function calculateLn() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        display.innerText = Math.log(value);
    }

    function calculateSquare() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        display.innerText = Math.pow(value, 2);
    }

    function calculateInverse() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        if (value === 0) {
            display.innerText = 'Infinity'; 
        } else {
            display.innerText = 1 / value;
        }
    }

    function calculateSqrt() {
        let display = document.getElementById('display');
        let value = parseFloat(display.innerText);
        display.innerText = Math.sqrt(value);
    }

    function calculateFactorial() {
        let display = document.getElementById('display');
        let value = parseInt(display.innerText);
        display.innerText = factorial(value);
    }

    function factorial(n) {
        if (n < 0) return 'Error'; 
        if (n === 0 || n === 1) return 1;
        return n * factorial(n - 1);
    }

    function insertPi() {
        let display = document.getElementById('display');
        let currentValue = parseFloat(display.innerText);
        
        if (currentValue === 0) {
            display.innerText = Math.PI;
        } else {
            display.innerText = currentValue * Math.PI;
        }
    }