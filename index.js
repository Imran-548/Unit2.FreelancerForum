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
// selectors
const firstNameSelector = document.querySelector("#name");
const occupationSelector = document.querySelector("#occupations");
const priceSelector = document.querySelector("#price");

const render = () => {
  const name = freeLancers.map((freelancer) => {
    const nameListItem = document.createElement("li")
    nameListItem.textContent = freelancer.name
    return nameListItem
  })
  const occupation = freeLancers.map((freelancer) => {
    const occupationListItem = document.createElement("li")
    occupationListItem.textContent = freelancer.occupation
    return occupationListItem
  })
  const price = freeLancers.map((freelancer) => {
    const priceListItem = document.createElement("li")
    priceListItem.textContent = freelancer.price
    return priceListItem
  })
  let avgPrice = Math.floor(freeLancers.reduce((acc, element) => acc + element.price, 0) / freeLancers.length);
  freeLancerPrice.textContent = 'The avg price is ' + avgPrice
  firstNameSelector.replaceChildren(...name)
  occupationSelector.replaceChildren(...occupation)
  priceSelector.replaceChildren(...price)
}

render()

const addFreelancerId = setInterval(addFreelancer, 1000)
function addFreelancer () {
  if (freeLancers.length === maxListing -1)clearInterval(addFreelancerId)
  const randomName = names[Math.floor(Math.random()* names.length)]
  const randomOccupation = occupations[Math.floor(Math.random()* occupations.length)]
  const randomPrice = prices[Math.floor(Math.random()* prices.length)]
  freeLancers.push({
    name: randomName,
    occupation: randomOccupation,
    price: randomPrice
  })
  render()
}





