const to_option = document.querySelector('.to_option');
const from_option = document.querySelector('.from_option');
const do_it = document.querySelector('.do_it');
const enter = document.querySelector('.enter'); 
const result = document.querySelector('.result');

// change fromConvert
var fromUnit = document.getElementById('from-unit');
var fromOptions = document.querySelectorAll('.from_option');
// change toConvert
var toUnit = document.getElementById('to-unit');
var toOptions = document.querySelectorAll('.to_option');

// change fromConvert
fromOptions.forEach(function(event) {
    event.addEventListener('click', function() {
        fromUnit.textContent = this.textContent;
        from = this.textContent;
    });
});

// change toConvert
toOptions.forEach(function(event) {
    event.addEventListener('click', function() {
        toUnit.textContent = this.textContent;
        to = this.textContent; 
    });
});

do_it.addEventListener('click', function() {
    if (enter.value !== '') {
        converter();
    }
});

let from = 'meter', to = 'meter';
function converter() {
    const inputValue = parseFloat(enter.value); 

    if (from == 'kelometer') { 
        if (to == 'kelometer') {
            result.textContent = inputValue; 
        } else if (to == 'meter') {
            result.textContent = inputValue * 1000;
        } else if (to == 'centimeter') {
            result.textContent = inputValue * 100000;
        }
    }
    if (from == 'meter') {
        if (to == 'kelometer') {
            result.textContent = inputValue / 1000;
        } else if (to == 'meter') {
            result.textContent = inputValue;
        } else if (to == 'centimeter') {
            result.textContent = inputValue * 100;
        }
    }
    if (from == 'centimeter') {
        if (to == 'kelometer') {
            result.textContent = inputValue / 100000;
        } else if (to == 'meter') {
            result.textContent = inputValue / 100;
        } else if (to == 'centimeter') {
            result.textContent = inputValue; 
        }
    }
}