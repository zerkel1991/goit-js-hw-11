export {fetchCountryByName}

// Я принимаю от юзера (имя страны) и  возвращаю json файл от сервера 
function fetchCountryByName(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
      .then((result)=>{
          return result.json()
          })
  }
  


