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
            name: "Mercedes benz",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
            FashionModel: "SL55 AMG"
        },
        c_class: {
            name: "Mercedes benz",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        e_class: {
            name: "Mercedes benz",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        g_class: {
            name: "Mercedes benz",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        }
    },
    toyota: {
        fortuner: {
            name: "honda civic",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        Yaris: {
            name: "honda civic",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        Camry: {
            name: "honda civic",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        Supra: {
            name: "honda civic",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        Rav4: {
            name: "honda civic",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        }
    },
    Toyota_Hilux: {
        Toyota_Pickup: {
            name: "Toyota_Hilux",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        }
    },
    Sequoia: {
        Toyota_Sequoia: {
            name: "Sequoia",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        sequoia_platinum: {
            name: "Toyota_Hilux",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        }
    },
    Land_Cruiser: {
        Toyota_FJ_Cruiser: {
            name: "Land_Cruiser",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        Toyota_Land_Cruiser_150: {
            name: "Land_Cruiser",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        Land_Rover_Discovery: {
            name: "Land_Cruiser",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
        },
        Toyota_Land_Cruiser_Prado: {
            name: "Land_Cruiser",
            year: 2003,
            price: 5000,
            make: "Mercedes Benz",
            colors: ["red", "green", "black"],
            Transmission: "Transmission",
            Mileage: "158,455",
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
    model.innerHTML = "";
    for (var key in cars[company.value]) {
        model.innerHTML += `
            <option value="${key}">${key.toUpperCase()}</options>
        `;

    }
}

