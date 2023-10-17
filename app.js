var cars = {
    Bmw: {
        M4: {
            name: "Mercedes SL55 AMG",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
            FashionModel: "SL55 AMG"
        },
    },
    Mercedes: {
        a_class: {
            name: "Mercedes-Benz",
            year: 2023,
            price: 17000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        },
        c_class: {
            name: "Mercedes-Benz",
            year: 2023,
            price: 17000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        },
        e_class: {
            name: "Mercedes-Benz",
            year: 2023,
            price: 17000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        },
        g_class: {
            name: "Mercedes-Benz",
            year: 2023,
            price: 14000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        }
    },
    toyota: {
        fortuner: {
            name: "honda civic",
            year: 2023,
            price: 5000,
            colors: ["red", "green", "black"],
            condition: "new"
        },
        Yaris: {
            name: "honda civic",
            year: 2023,
            price: 5000,
            colors: ["red", "green", "black"],
            condition: "new"
        },
        Camry: {
            name: "honda civic",
            year: 2023,
            price: 5000,
            colors: ["red", "green", "black"],
            condition: "new"
        },
        Supra: {
            name: "honda civic",
            year: 2023,
            price: 5000,
            colors: ["red", "green", "black"],
            condition: "new"
        },
        Rav4: {
            name: "honda civic",
            year: 2023,
            price: 5000,
            colors: ["red", "green", "black"],
            condition: "new"
        }
    },
    Toyota_Hilux: {
        Toyota_Pickup: {
            name: "Toyota_Hilux",
            year: 1968,
            price: 17000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        }
    },
    Sequoia: {
        Toyota_Sequoia: {
            name: "Sequoia",
            year: 2022,
            price: 13000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        },
        sequoia_platinum: {
            name: "Sequoia",
            year: 2023,
            price: 15000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        }
    },
    Land_Cruiser: {
        Toyota_FJ_Cruiser: {
            name: "Land_Cruiser",
            year: 2019,
            price: 14000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        },
        Toyota_Land_Cruiser_150: {
            name: "Land_Cruiser",
            year: 2022,
            price: 30000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        },
        Land_Rover_Discovery: {
            name: "Land_Cruiser",
            year: 2022,
            price: 30000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        },
        Toyota_Land_Cruiser_Prado: {
            name: "Land_Cruiser",
            year: 2022,
            price: 30000,
            colors: ["red", "green", "black"],
            condition: "new",
            door: 4,
            wheels: 4,
        }
    }
}



var company = document.getElementById("company")
var model = document.getElementById("model")

for (var key in cars) {
    company.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</options>
    `
}

function onChangeCompany() {
    brand.innerHTML = "";
    for (var key in cars[company.value]) {
        model.innerHTML += `
    <option value="${key}">${key.toUpperCase()}</options>
    `
    }
}
