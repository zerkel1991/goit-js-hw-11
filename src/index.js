
import { Pixabay } from "./js/pixabay-api";
import Notiflix from "notiflix";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import createGalleryCards from './templates/gallery-card.hbs';
const searchForm  = document.querySelector(".search-form");
const galleryContainer = document.querySelector(".gallery");
const pixabay = new Pixabay();
searchForm.addEventListener('submit',onSearchFormSubmit)



function onSearchFormSubmit (event){
    event.preventDefault()
    pixabay.page = 1;

pixabay.quary  = event.currentTarget.elements.searchQuery.value;
pixabay.fetchPhotosByQuery()
.then((responce)=>{
        if(responce.data.total === 0){
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            galleryContainer.innerHTML = '';
            return 
        }else if(responce.data.total >0){
        Notiflix.Notify.success(`We founded : ${responce.data.total} images`)
          galleryContainer.innerHTML= createGalleryCards(responce.data.hits) 
          observer.observe(document.querySelector(".scroll-target"));
        }


})
.catch(()=>{
    Notiflix.Notify.failure("Sorry,something wrong");
})
}


function pagination(){
    pixabay.page += 1;
    pixabay.fetchPhotosByQuery()
    .then(responce =>{
        if(responce.data.hits.length === 0  ){
             Notiflix.Notify.failure("We're sorry, but you've reached the end of search results."); 
            observer.unobserve(document.querySelector(".scroll-target"))
        } else{
            galleryContainer.insertAdjacentHTML("beforeend",createGalleryCards(responce.data.hits))
        }
    
    })
}


const options = {
    root: null,
    rootMargin: '600px',
    threshold: 1.0
}
 function callback (entries, observer) {
    if(entries[0].isIntersecting){
        pagination()
    }
   
};
const observer = new IntersectionObserver(callback, options);

