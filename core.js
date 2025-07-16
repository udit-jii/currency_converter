const logo = document.querySelector("#sign")
const money = document.querySelector("#amount")
const select_f = document.querySelector("#fcountry")
const select_t = document.querySelector("#tcountry")
const img_f = document.querySelector("#img1")
const img_t = document.querySelector("#img2")
let value_f = "USD"
let value_t = "INR"
// for(let code in countryList){
// }

select_f.addEventListener("change", () => {
    // countryList[select_f.value];
    img_f.src = `https://flagsapi.com/${countryList[select_f.value]}/flat/64.png`;
    value_f = select_f.value;
})

select_t.addEventListener("change", () => {
    // countryList[select_f.value];
    img_t.src = `https://flagsapi.com/${countryList[select_t.value]}/flat/64.png`;
    value_t = select_t.value;
})

for (let code in countryList) {
    if (code != "INR") {
        let opt = document.createElement("option");
        opt.value = code;
        opt.innerText = code;
        // select_f.appendChild(opt);
        select_t.appendChild(opt);
    }
}

for (let code in countryList) {
    if (code != "USD") {
        let opt = document.createElement("option");
        opt.value = code;
        opt.innerText = code;
        select_f.appendChild(opt);
    }
    // select_t.appendChild(opt);
}

// const URL = "https://open.er-api.com/v6/latest/USD";


// const convert = async () => {
//     let response = await fetch(URL);
//     let data = await response.json();
//     console.log(data.rates['INR']);
// }
output = document.querySelector("#output")

logo.addEventListener("click", () => {

    output.innerText= "clciked !"

    if (money.value < 0) {
        output.innerText = "Enter a Valid Number"
    }

    else {
        // let rate=0;
        // console.log("converting....");
        logo.style.transform = "scale(1.10)";
        setTimeout(() => {
            logo.style.transform = "scale(1)";
        }, 200)
        // console.log("u entered = ",money.value)
        async function convert() {
            let response = await fetch(`https://open.er-api.com/v6/latest/${value_f}`);
            let data = await response.json();
            let rate = data.rates[value_t];
            output.innerText = Math.round(rate * (money.value) * 100) / 100
        }
        convert();
    }
})
