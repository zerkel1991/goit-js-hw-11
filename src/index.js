
import { Pixabay } from "./js/pixabay-api";
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import createGalleryCards from './templates/gallery-card.hbs';
const searchForm  = document.querySelector(".search-form");
const galleryContainer = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector(".load-more")
const pixabay = new Pixabay();
searchForm.addEventListener('submit',onSearchFormSubmit)
loadMoreBtn.addEventListener('click',pagination)


function onSearchFormSubmit (event){
    event.preventDefault()
    pixabay.page = 1;
    loadMoreBtn.classList.add("is-hidden")
pixabay.quary  = event.currentTarget.elements.searchQuery.value;
pixabay.fetchPhotosByQuery()
.then((responce)=>{
        if(responce.data.total === 0){
           return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
        }else if(responce.data.total >0){
        Notiflix.Notify.success(`We founded : ${responce.data.total} images`)
          galleryContainer.innerHTML= createGalleryCards(responce.data.hits) 
       
        }
        loadMoreBtn.classList.remove("is-hidden")

})
.catch(()=>{
    Notiflix.Notify.failure("Sorry,something wrong");
})
}


function pagination(){
    pixabay.page += 1;
    pixabay.fetchPhotosByQuery()
    .then(responce =>{
        if(responce.data.hits.length === 0 ){
            loadMoreBtn.classList.add("is-hidden")
             Notiflix.Notify.failure("We're sorry, but you've reached the end of search results."); 

        } else{
            galleryContainer.insertAdjacentHTML("beforeend",createGalleryCards(responce.data.hits))
        }
    
    })
}


