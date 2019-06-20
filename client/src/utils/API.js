import axios from "axios";

axios.defaults.port = 3001;

export default {
    getBooks: () => {
        return axios.get("/api/books/");
    },
    addBook: data => {
        return axios.post("/api/books/",data);
    },
    deleteBook: id => {
        return axios.delete("/api/books/" + id);
    }

}