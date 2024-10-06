const resultContainerElement = document.querySelector("#result-container");
const inputELement = document.querySelector("#input");
const searchBtnElement = document.querySelector("#search-btn");


searchBtnElement.addEventListener("click", () => {
  displayResult();
  getdata();
})
let word = "world";
const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

const getdata = async () => {
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
};


function displayResult() {
  resultContainerElement.innerHTML = `
              <div class="row">

              <div class="col-10 mb-3">
                <h4>Word</h4>
                <p>adjective</p>
              </div>
              <div class="col-2">
                <button class="btn btn-outline-dark">
                  <i class="bi bi-volume-up fs-5"></i>
                </button>
              </div>

              <hr>

              <div class="col-12 mb-3 border-start border-5 rounded-1 border-dark">
                <h4>Meaning</h4>
                <p>this is meaning</p>
              </div>

              <hr>

              <div class="col-12 mb-3 border-start border-5 rounded-1 border-dark">
                <h4>Example</h4>
                <p>this is example</p>
              </div>

              <hr>

              <div class="col-12 mb-3 border-start border-5 rounded-1 border-dark">
                <h4>Synonyms</h4>
                <p>this is Synonyms</p>
              </div>

            </div>            
`
}












