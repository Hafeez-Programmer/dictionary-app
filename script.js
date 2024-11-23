let resultContainerElement = document.querySelector("#result-container");
let inputELement = document.querySelector("#input");
let searchBtnElement = document.querySelector("#search-btn");

searchBtnElement.addEventListener('click', () => {
  getdata();
})

inputELement.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    getdata();
  }
})


const getdata = async () => {
  let word = inputELement.value;
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
  
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
    
    let data = await response.json();
    
    // console.log(data[0]);
    
    displayResult(word, data);
    
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
};

function displayResult(word, data) {
  resultContainerElement.innerHTML = `
    <div class="row">
    
    <div class="col-10 mb-3">
      <h4>${word}</h4>
    </div>
    <div class="col-2">
      <button class="btn btn-outline-dark">
      <i class="bi bi-volume-up fs-5"></i>
      </button>
    </div>
    
    <hr>

    <div class="col-12 mb-3 border-start border-5 rounded-1 border-dark">
    <h4>Meanings</h4>
    <div id="meaningContainer" class="row">
    
    
    </div>
    </div>
    
    <hr>
    
    <div class="col-12 mb-3 border-start border-5 rounded-1 border-dark">
    <h4>Antonyms</h4>
    <div class="row">
    
    <div id="antonymsContainer" class="col-12">
    </div>
    
    </div>
    </div>
    
    <hr>
    
    <div class="col-12 mb-3 border-start border-5 rounded-1 border-dark">
    <h4>Synonyms</h4>
    <div class="row">
    
      <div id="synonymsContainer" class="col-12">
      </div>
      
    </div>
      </div>
      
    </div>            
    `
  let meaningContainerElement = document.querySelector("#meaningContainer");
  let antonymsContainerElement = document.querySelector("#antonymsContainer")
  let synonymsContainerElement = document.querySelector("#synonymsContainer");
  
  
  data[0].meanings.forEach(meaning_object => {
    // meanings 
    let partOfSpeech = meaning_object.partOfSpeech;
    let definition = meaning_object.definitions[0].definition;  
    
    // antonyms
    meaning_object.antonyms.forEach(antonym_object => {
      antonymsContainerElement.innerHTML += `
        <p class="d-inline">${antonym_object},</p>
      `      
    });

    meaning_object.synonyms.forEach(synonym_object => {
      synonymsContainerElement.innerHTML += `
        <p class="d-inline">${synonym_object},</p>
      `      
    });


    
    
    meaningContainerElement.innerHTML += `
      <div class="col-12">      
        <h6 class="d-inline">${partOfSpeech}:</h6>
        <p class="d-inline">${definition}</p>
      </div>        
      `
    
    });      
}















