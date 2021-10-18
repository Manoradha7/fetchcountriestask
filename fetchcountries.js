const div1 = document.createElement("div");
div1.className = "container";
document.body.append(div1);
const div2 = document.createElement("div");
div2.className = "row";
document.querySelector(".container").append(div2);
fetch("https://restcountries.com/v3/all")
    .then((data) => data.json())
    .then((countries)=> {
        countries.forEach((data) => {
            const flag=document.querySelector(".row");
            flag.innerHTML +=`
            <div class="col-12 col-sm-6 col-md-3">
            <div class="flag">
            <img
               src=${data.flags[0]} class="flag-responsive" 
            />
            <div class="flag_detail">
            <p class="heading">${data.name.common}</p>
            <p><b>capital:</b>${data.capital}</p>
            <p><b>region:</b>${data.region}</p>
            <p><b>population:</b>${data.population}</p>
            </div></div>
            </div>`
        })
    });
