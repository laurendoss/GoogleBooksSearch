import axios from "axios"; 
const ApiKey = process.env.API_KEY
export default {
    getSavedBooks: function(){
        return axios.get("/api/books"); 
    },

    getGoogleBooks: function(){
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=" + ApiKey)
    }
}



getGoogleBooks().then(function(data){
    console.log(data)
})