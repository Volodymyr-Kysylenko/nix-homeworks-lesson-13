let fieldCoordinates = field.getBoundingClientRect();

let firstArrowCoordinates = document.createElement('div');
firstArrowCoordinates.textContent = `1, верхній лівий зовнішній кут: 
x: ${fieldCoordinates.left}, y:${fieldCoordinates.top}`;

let secondArrowCoordinates = document.createElement('div');
secondArrowCoordinates.textContent = `2, нижній правий, зовнішній кут: 
x: ${fieldCoordinates.right}, y:${fieldCoordinates.bottom}`;

let thirdArrowCoordinates = document.createElement('div');
thirdArrowCoordinates.textContent = `3, верхній лівий, внутрішній кут: 
x: ${fieldCoordinates.left + field.clientLeft}, y:${fieldCoordinates.top + field.clientTop}`;

let fourthArrowCoordinates = document.createElement('div');
fourthArrowCoordinates.textContent = `4, нижній правий, внутрішній кут: 
x: ${fieldCoordinates.left + field.clientLeft + field.clientWidth}, y:${fieldCoordinates.top + field.clientTop + field.clientHeight}`;

let fieldArrowsCoordinatesDiv = document.createElement('div');
fieldArrowsCoordinatesDiv.innerHTML = 'Отримані координати:<br><br>';
fieldArrowsCoordinatesDiv.append(firstArrowCoordinates, secondArrowCoordinates, thirdArrowCoordinates, fourthArrowCoordinates);

document.body.append(fieldArrowsCoordinatesDiv);