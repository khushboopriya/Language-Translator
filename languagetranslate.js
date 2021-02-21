let input=document.querySelector('#input');
let output=document.querySelector('#output');
let translateButton=document.querySelector('#translate-button');
const resetButton=document.querySelector('#reset-button');

resetButton.addEventListener('click',()=>{
  input.value="";
  output.value="";
  });

translateButton.addEventListener('click',()=>{
  const url = new URL('https://api.mymemory.translated.net/get');
  const param = { q: input.value, langpair: 'en|hi' };
  url.search = new URLSearchParams(param).toString();

//   fetch(url)

//   .then((response) => response.json())
//   .then((response)=>console.log(response));

// UNCOMMENT THE ABOVE CODE TO SEE THE JSON OUTPUT IN CONSOLE

  fetch(url)
  .then((response) => response.json())
      .then((json) => {
          output.value = json.responseData.translatedText;
      });
});
