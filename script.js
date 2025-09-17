function createPromise(name) {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name, time: delay / 1000 }), delay);
  });
}

const output = document.getElementById("output");

const promises = [
  createPromise("Promise 1"),
  createPromise("Promise 2"),
  createPromise("Promise 3"),
];
let m=0;
Promise.all(promises).then((results) => {
  output.innerHTML = "";
  results.forEach((res) => {
	m=Math.max(m,res.time);
    output.innerHTML += `<tr><td>${res.name}</td><td>${res.time.toFixed(3)}</td></tr>`;
  });
  output.innerHTML += `<tr><td>Total</td><td>${m.toFixed(3)}</td></tr>`;
});


