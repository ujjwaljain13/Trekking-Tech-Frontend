const url = "https://trekking-tech.onrender.com/login";

const func = async () => {
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
