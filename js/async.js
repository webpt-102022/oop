
let joke;

function slowFunction(cb) { // API call
  fetch('https://v2.jokeapi.dev/joke/Any')
    .then(res => res.json())
    .then(data => {
      joke = data;
    })
    .then(() => {
      console.log('Data: ', joke);
      cb(quickFunction);
    });
}

function mediumFunction(cb) { // 0 seconds
  console.log('Medium function')
  console.log('Data: ', joke)
  cb();
}

function quickFunction() { // 0 seconds
  console.log('Quick function')
  console.log('Data: ', joke)
}

// const result = arr.map(() => { })

setTimeout(function () {
  console.log('Hi')
}, 1000);

// let counter = 0;

// const idInterval = window.setInterval(function () {
//   if (counter < 10) {
//     counter++;
//     console.log(counter)
//   }
// }, 10)

// console.log(idInterval)




