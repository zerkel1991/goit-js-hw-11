
// // Я по количеству найденных стран, выбираю какую разметку рендерить или вывести нотификацию.
// function checkValueAndChooseRender(ArrayOfObjects){
//     if(ArrayOfObjects.length > 10){
//         Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
//     }else if(ArrayOfObjects.length > 2){
//         createLiFromJson(ArrayOfObjects)
//     }else if (Array.length === 1){
//         createLiFromJson(ArrayOfObjects)
//         createCountryInfo(ArrayOfObjects)

//     }
// }

// // Я беру JSON стран и рисую разметку, если стран НЕ 1.

//   function createLiFromJson(ArrayOfObjects){
//     const countryArr = ArrayOfObjects.map((element)=>{
//         console.log(element)
//       const countryItem = `<li class="country__item"><img class="gallery__image" src= ${element.flags.svg} alt="fdfdf" width="50px" /><span class="country__name">${element.name.common}</span> </li>`
//       return countryItem
//     })
//     findedCountryList.insertAdjacentHTML("beforeend",countryArr.join(" "));
// }

// // Я рисую разметку, если нашлась 1 страна
//  function createCountryInfo(ArrayOfObjects){
//     const countryArr = ArrayOfObjects.map((element)=>{
//         console.log(element)
//       const countryItem = `<ul class = "country-info__list">
//       <li class = "country-info__item">Capital: ${element.capital}</li>
//       <li class = "country-info__item">Population: ${element.population}</li>
//       <li class = "country-info__item">Languages:${Object.values(element.languages)} </li>
//     </ul>`
//       return countryItem
//     })
//     countryInfoContainer.insertAdjacentHTML("beforeend",countryArr.join(" "));
// }


// // Я чищу разметку при вводе символов в инпут.
//  function removeRenderHtml(){
//     findedCountryList.innerHTML = "";
//     countryInfoContainer.innerHTML="";
// }

// export default{checkValueAndChooseRender,createLiFromJson,
//     createCountryInfo,removeRenderHtml}