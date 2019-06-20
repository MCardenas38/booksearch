import React, {Component} from "react";
import API from "../utils/API";
import Nav from "../components/Nav";
import BookHolder from "../components/BookHolder";

class Saved extends Component{
    state={
        saved_books: [],
        layout: "saved"
    }

    componentDidMount(){
        API.getBooks()
        .then(res=>{
            this.setState({
                saved_books: res.data
            })
        });
    }

    handleIconclick= id =>{
        API.deleteBook(id).then(
            ()=>{
                API.getBooks()
                .then(res=>{
                    this.setState({
                        saved_books: res.data
                    })
                });
            }
        );
    }


    render(){
        return(
            <div>
                <Nav layout={this.state.layout}/>
                <div className="container shadow-lg p-3 mb-5 bg-white rounded">
                    {this.state.saved_books?(this.state.saved_books.map(book =>{
                            return(
                                <BookHolder {...book} icon={"fas fa-trash-alt"} handleIconclick={this.handleIconclick} message="Remove"/>
                            );
                        })): <div>No Books Saved</div>
                    }

                </div>
            </div>
        );
    }

}

export default Saved;