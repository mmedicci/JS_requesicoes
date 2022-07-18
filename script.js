// API

function gerarCardsListaRepositorios(listaRepositorios){
    const section = document.querySelector('#repositorios');
    
    for(let i = 0; i < listaRepositorios.length; i++){
      const repositorio = listaRepositorios[i];
      let html;

      if(repositorio.description === null){
        html = `<a class="reposit" href="${repositorio.html_url}" target="_blank">
          <h2 class="title_reposit">${repositorio.name}</h2>
        </a>`;
        
      } else {
        html = `<a class="reposit" href="${repositorio.html_url}" target="_blank">
          <h2 class="title_reposit">${repositorio.name}</h2>
          <p class="descr_reposit">${repositorio.description}</p>
          </a>`;
      }
      section.innerHTML = section.innerHTML + html;
    }
  }
  
  function getListaRepositorios(reposUrl){
    fetch(reposUrl)
    .then(function(response){ return response.json() })
    .then(function(response){
      gerarCardsListaRepositorios(response);
    })
  }
  
  fetch("https://api.github.com/users/mmedicci")
  .then(function(response){
    return response.json();
  })

  .then(function(response){
        getListaRepositorios(response.repos_url);
  })

  .catch(function(error){
    console.error(error)
  })