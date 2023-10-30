const names = ["Dr. Slice","Dr. Pressure","Prof. Possibility","Prof. Prism","Dr. Impulse","Prof. Spark","Dr. Wire","Prof. Goose",]
const occupations = ["gardner","programmer","teacher","teacher","teacher","programmer","teacher","driver"];
const prices = [25,51,43,81,43,76,47,72];
const maxListing = 10;
const freeLancers = [

    {
        name: names[0],
        occupation: occupations[0],
        price: prices[0],
    },
    {
        name: names[1],
        occupation: occupations[1],
        price: prices[1],
    }
]

// find average price
let avgPrice = Math.floor(freeLancers.reduce((acc, element) => acc + element.price, 0) / freeLancers.length);


// update average price with new number
 freeLancerPrice.textContent = 'The avg price is ' + avgPrice

 
// maps through names 
const firstName = document.querySelector("#name");
  const object = freeLancers.map((names) => {
    const element = document.createElement("li");
    element.append(names);
    return element;
  });
  firstName.replaceChildren(...freeLancers);

// maps through occupations 
const occupation = document.querySelector("#occupations");
  const job = freeLancers.map((occupations) => {
    const element = document.createElement("li");
    element.append(occupations);
    return element;
  });
  occupation.replaceChildren(...freeLancers);


  // maps through occupations 
const money = document.querySelector("#price");
const amount = freeLancers.map((prices) => {
  const element = document.createElement("li");
  element.append(prices);
  return element;
});
money.replaceChildren(...freeLancers);


