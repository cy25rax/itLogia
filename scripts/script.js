const filterItems = document.querySelectorAll(".cars-filter li");
const carsItems = document.querySelectorAll(".car-cart");
const carsContent = document.getElementById("cars-content");

filterItems.forEach(item => {
    item.onclick = () => {
        filteItems.forEach(el => el.classList.remove("active"));
        item.classList.add("active");

        const filterText = item.textContent.toLowerCase();

        carsItems.forEach(car => {
            if (filterText === "все марки" || car.querySelector("h4").textContent.toLocaleLowerCase().includes(filterText)) {
                car.style.display = "flex";
            } else {
                car.style.display = "none";
            }
        });

        carsContent.scrollIntoView({ behavior: "instant" });
    }
})

const carField = document.getElementById("form-car");
const nameField = document.getElementById("form-name");
const phonefield = document.getElementById("form-phone");

document.getElementById("form-action").addEventListener('click', function () {
    const fielsds = [carField, nameField, phonefield];

    let hasError = false;

    fielsds.forEach(field => {
        if (field.value.trim() === '' || field === phonefield && phonefield.value.trim().length != 10) {
            field.style.borderColor = 'red';
            hasError = true;
        } else {
            field.style.borderColor = 'white';
        }
    });

    if (!hasError) {
        alert("thank you for order");

        fielsds.forEach(field => {field.value = ''});
    }
})