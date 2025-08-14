const products = [
    { id: 1, name: "Personal Training Plan" },
    { id: 2, name: "Weight Loss Program" },
    { id: 3, name: "Muscle Gain Program" },
    { id: 4, name: "HIIT Sessions" },
    { id: 5, name: "Online Coaching" }
];

document.addEventListener('DOMContentLoaded', () => {
    const select = document.getElementById('productName');

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
    });
});
