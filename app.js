const feedDisplay = document.querySelector("#disname");

await fetch("https://trekking-tech.onrender.com/dashboard")
  .then(async (response) => {
    const data = response.json();
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
