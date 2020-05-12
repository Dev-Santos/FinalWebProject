// import React from 'react';
// import '../css/listItems.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import FlipMove from 'react-flip-move';
// import axios from 'axios';

// class ListItems extends React.Component {
    
//     state = {
//         _id: '',
//         body: '',
//         notes: []
//     };

//     // constructor(props){
//     //     super(props);
//     //     this.state = {
//     //         notes: props.notes
//     //     }
//     //     console.log("Props: ", props)
//     // }

//     componentDidMount = () => {
//         this.getNotes();
//     }

//     updateNote() {
//         const data = {
//             "body": "NewUpdated Body"
//         }

//         axios.put('http://localhost:8080/api', data)
//             .then((data) => {
//                 console.log(data);
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }

    // removeNote(id){
    //     console.log("You clicked me...", id);
    //     // if(window.confirm("Are you sure about deleting this item?")){
    //         axios.delete('http://localhost:8080/api/delete', {
    //         params: { id }
    //         })
    //         .then(response => {
    //             console.log('deleteNote response', response, this.state);
    //             // this.getNotes();
    //         })
    //         .catch((error) => {
    //             console.log("Error deleting...", error);
    //         })
    //     // }        
    // }

//     getNotes = () => {
//         axios.get('http://localhost:8080/api')
//             .then((response) => {
//                 const data = response.data;
//                 this.setState({ notes: data });
//                 console.log('Data received...');
//             })
//             .catch(() => {
//                 console.log('Error receiving data...');
//             });
//     };


//     displayNotes = (notes) => {        
//         if(!notes.length) return null;

//         return notes.map((note) => {
//             return(         
                       
//                 <div key={note._id} className="list">
//                     <p>
//                          <li id={note._id}>
//                             {note.body}
//                             <span>
//                                 <FontAwesomeIcon className="faicons" 
//                                 icon="trash"
//                                 onClick={ () => {this.removeNote(note._id)}}                           
//                                 />
//                             </span>
//                         </li>
//                     </p>
//                 </div>
//             )
//         });
//     };

//     render() {
       
//         // console.log("ID: ",this.notes._id);
                    
//         return (
//             <div>
//                 <FlipMove duration={300} easing="ease-in-out">
//                     <div className="notes">
//                         {this.displayNotes(this.state.notes)}
//                     </div>
//                 </FlipMove>            
//             </div>  
//         );
        
//     }
// }



// // function ListItems(props) {
// //     const items = props.items;
// //     const listItems = items.map(item =>
// //         {
// //             return <div className="list" key={item.key}>
// //                 <p>
// //                     <input type="text" 
// //                     id={item.key}
// //                     value = {item.text}
// //                     onChange ={
// //                         (e) => {
// //                             props.setUpdate(e.target.value, item.key)
// //                         }
// //                     }
// //                     />
// //                 <span>
// //                     <FontAwesomeIcon className="faicons" 
// //                     icon="trash" 
// //                     onClick={ () => props.deleteItem(item.key)
// //                     }/>
// //                 </span>
// //                 </p>

// //             </div>
// //         })
// //     return (
// //         <div>
// //             <FlipMove duration={300} easing="ease-in-out">
// //                 {listItems}
// //             </FlipMove>            
// //         </div>
// //     )
// // }

// export default ListItems;