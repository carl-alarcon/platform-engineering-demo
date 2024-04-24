// Assuming your service name is 'y-calculator-service' and it's exposed on port 80
const addServiceEndpoint =  process.env.ADDITION_SERVICE;
const subtractServiceEndpoint =  process.env.SUBTRACT_SERVICE;
const multiplyServiceEndpoint =  process.env.MULTIPLY_SERVICE;
const divideServiceEndpoint =  process.env.DIVIDE_SERVICE;

// Add event listener for 'add' button
document.getElementById('add').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('numberForm'));
    const number1 = formData.get('number1');
    const number2 = formData.get('number2');
    const data = {number1, number2};
    fetch(`/add`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
   .then(response => response.json())
   .then(data => {
        document.getElementById('result').innerText = `Result: ${data.result}`;
    })
   .catch((error) => {
        console.error('Error:', error);
    });
});

// Add event listener for 'ubtract' button
document.getElementById('subtract').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('numberForm'));
    const number1 = formData.get('number1');
    const number2 = formData.get('number2');
    const data = {number1, number2};
    fetch(`/subtract`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
   .then(response => response.json())
   .then(data => {
        document.getElementById('result').innerText = `Result: ${data.result}`;
    })
   .catch((error) => {
        console.error('Error:', error);
    });
});

// Add event listener for 'ultiply' button
document.getElementById('multiply').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('numberForm'));
    const number1 = formData.get('number1');
    const number2 = formData.get('number2');
    const data = {number1, number2};
    fetch(`/multiply`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
   .then(response => response.json())
   .then(data => {
        document.getElementById('result').innerText = `Result: ${data.result}`;
    })
   .catch((error) => {
        console.error('Error:', error);
    });
});

// Add event listener for 'divide' button
document.getElementById('divide').addEventListener('click', function() {
    const formData = new FormData(document.getElementById('numberForm'));
    const number1 = formData.get('number1');
    const number2 = formData.get('number2');
    const data = {number1, number2};
    fetch(`/divide`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
   .then(response => response.json())
   .then(data => {
        document.getElementById('result').innerText = `Result: ${data.result}`;
    })
   .catch((error) => {
        console.error('Error:', error);
    });
});