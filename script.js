function createPromise(name) {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, time: delay / 1000 }), delay);
  });
}

const output = document.getElementById("output");
const start = performance.now();

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];

Promise.all(promises).then((results) => {
  output.innerHTML = "";
  results.forEach((res) => {
    output.innerHTML += `<tr><td>${res.name}</td><td>${res.time.toFixed(3)}</td></tr>`;
  });
  const total = (performance.now() - start) / 1000;
  output.innerHTML += `<tr><td>Total</td><td>${total.toFixed(3)}</td></tr>`;
});


