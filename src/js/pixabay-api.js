import axios from "axios";

export class Pixabay{
    #API_KEY = '28680775-d5d2c94020fa583a98c0796ee';
    #BASE_URL ='https://pixabay.com/api';
    
    constructor(){
        this.page = 1;
        this.quary = null;
    }

        fetchPhotosByQuery(){
            const urlSearchParams = new URLSearchParams({
                key : this.#API_KEY,
                q : this.quary,
                image_type : 'photo',
                orientation : 'horizontal',
                safesearch : true,
                page : this.page,
                per_page : 40
                
            })
                return axios.get(`${this.#BASE_URL}/?${urlSearchParams}`)
        }
    }

