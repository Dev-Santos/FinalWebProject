import React from 'react';
import '../css/checklist.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';
import axios from 'axios';

library.add(faTrash);

class CheckList extends React.Component {

    state = {
        _id: '',
        body: '',
        notes: []
    };

    componentDidMount = () => {
        this.getNotes();
    }

    handleChange = ({ target }) => {
        const { value } = target;
        this.setState({ body: value });
    };

    getNotes = () => {
        axios.get('http://localhost:8080/api')
            .then((response) => {
                const data = response.data;
                this.setState({ notes: data });
                console.log('Data received...', data);
            })
            .catch(() => {
                console.log('Error receiving data...');
            });
    };

    displayNotes = (notes) => {        
        if(!notes.length) return null;

        return notes.map((note) => {
            return(         
                       
                <div key={note._id} className="list">
                    <p>
                         <li id={note._id}>
                            {note.body}
                            <span>
                                <FontAwesomeIcon className="faicons" 
                                icon="trash"
                                onClick={ () => {this.removeNote(note._id)}}                           
                                />
                            </span>
                        </li>
                    </p>
                </div>
            )
        });
    };

    removeNote(id){
        console.log("You clicked me...", id);
        // if(window.confirm("Are you sure about deleting this item?")){
            axios.delete('http://localhost:8080/api/delete', {
            params: { id }
            })
            .then(response => {
                console.log('deleteNote response', response, this.state);
                this.getNotes();
            })
            .catch((error) => {
                console.log("Error deleting...", error);
            })
        // }        
    }
    

    submit = (event) => {
        event.preventDefault();

        const payload = {
            body: this.state.body
        };

        axios({
            url: 'http://localhost:8080/api/save',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('Data has been sent to the server');
                this.resetUserInputs();
                this.getNotes();
            })
            .catch(() => {
                console.log('Internal server error');
            });
    };

    resetUserInputs = () => {
        this.setState({
            body: ''
        });
    };


    
    render(){
        //Return
        return (
            <div className="CheckList">
                
                <header>
                    <form id="to-do-form" onSubmit={this.submit}>
                        <input 
                            type="text"
                            name="newNote"
                            placeholder="Enter item: "
                            value= {this.state.body}
                            onChange={this.handleChange}
                        />
                        {/* <input type="text" placeholder="Enter item: "
                        value={this.state.currentItem.text} onChange={this.handleInput} /> */}
                        <button type="submit">Add Item</button>
                    </form>
                    {/* <ListItems notes={this.state.notes} /> */}
                    <div>
                        <FlipMove duration={300} easing="ease-in-out">
                            <div className="notes">
                                {this.displayNotes(this.state.notes)}
                            </div>
                        </FlipMove>            
                    </div>
                    {/* <ListItems items = {this.state.items}
                    deleteItem = {this.deleteItem}
                    setUpdate = {this.setUpdate}></ListItems> */}
                </header>
                
            </div>
        );
    }
}

export default CheckList;



    // constructor(props){
    //     super(props);
    //     this.state={
    //         items:[],
    //         currentItem:{
    //             text:'',
    //             key:''
    //         }            
    //     }
    //     this.handleInput = this.handleInput.bind(this);
    //     this.addItem = this.addItem.bind(this);
    //     this.deleteItem = this.deleteItem.bind(this);
    //     this.setUpdate = this.setUpdate.bind(this);
    // }
    // handleInput(e){
    //     this.setState({
    //         currentItem:{
    //             text: e.target.value,
    //             key: Date.now()
    //         }
    //     })
    // }
    // addItem(e){
    //     e.preventDefault();
    //     const newItem = this.state.currentItem;
    //     console.log(newItem);
    //     if(newItem.text!==""){
    //         const newItems=[...this.state.items, newItem];
    //         this.setState({
    //             items:newItems,
    //             currentItem:{
    //                 text:'',
    //                 key:''
    //             }
    //         })
    //     }
    // }
    // deleteItem(key){
    //     const filteredItems = this.state.items.filter( item => item.key!==key);
    //     this.setState({
    //         items:filteredItems
    //     })
    // }
    // setUpdate(text, key){
    //     const items = this.state.items;
    //     items.map(item =>{
    //         if(item.key===key){
    //             item.text=text;
    //         }
    //     })
    //     this.setState({
    //         items: items
    //     })
    // }