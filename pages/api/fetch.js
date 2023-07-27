async function demo() {
  //https://cat-fact.herokuapp.com
  const data = await fetch("https://google.com");
  const response = await data.text();
  console.log(response);
}

demo();
