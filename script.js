let word = "world";
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

const getdata = async () => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
};

getdata();












