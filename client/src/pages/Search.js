import React, {Component} from "react";
import axios from "axios";
import API from "../utils/API";
import Nav from "../components/Nav";
import BookHolder from "../components/BookHolder";

class Search extends Component{
    state={
        search_term: "",
        results: [],
        layout: "search",
        handleSearchclick: this.handleSearchclick,
        handleIconclick: this.handleIconclick
    }

    handleSearchclick= ()=> {
        let search= this.state.search_term;
        search= search.trim().replace(" ","+");
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyCQavsi-hB95Nbln2sHXkjA32GHzOAECCI`)
            .then(response1 => { 
                API.getBooks()
                    .then(res2 => {
                        const array= response1.data.items;
                        let length= array.length > 25? 25 : array.length;
                        const temp_array= [];
                        for(let i=0;i<length;++i){
                            let book= {
                                imgsrc: array[i].volumeInfo.imageLinks.thumbnail,
                                title: array[i].volumeInfo.title,
                                authors: array[i].volumeInfo.authors,
                                description: array[i].volumeInfo.description,
                                link: array[i].volumeInfo.infoLink,
                                id: array[i].id
                            }
                            for(let x= 0; x<res2.data.length;++x){
                                if(res2.data[x].id===book.id){
                                    book.saved= true;
                                    break;
                                }
                                else{
                                    book.saved=false
                                }
                            }
                            temp_array.push(book);
                        }
                        this.setState({
                            results: temp_array
                        });
                    });
            });
    }

    handleIconclick= index => {
        API.addBook(this.state.results[index])
            .then(()=>{
                let temp_array= this.state.results;
                let temp= this.state.results[index];
                temp.saved= true;
                temp_array[index]= temp;
                this.setState({
                    results: temp_array
                });
            })
            .catch(err => console.log(err));
    }

    handleInputChange= e =>{
        this.setState({
            search_term: e.target.value
        });
    } 

    render(){
        return(
            <div>
                <Nav layout={this.state.layout} onClick= {this.handleSearchclick} onChange= {this.handleInputChange}/>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                    {this.state.results.map((book,index) => {
                        return(
                            <BookHolder {...book} layout={this.state.layout}  message= {book.saved? 'Saved':"Add to Saved"} handleIconclick= {book.saved? ()=>{} : this.handleIconclick} _id= {index}/>
                        );
                    })}
                </div>
            </div>
        );
    }


}

export default Search;