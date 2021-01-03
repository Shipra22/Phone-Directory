
import React, { Component } from 'react';
import Header from "./Header";
import './App.css'
class App extends Component {
  render() {
    let subscribers = [
      { id:1, name: "Shipra", phone: "2222222222" },
      { id:2, name: "Ayushi", phone: "99999999999" },
    ];

    return (
      <div >
        <Header name="Phone-Directory"  />
       
        <div className="container">
       
          <button className="add-btn">Add</button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {subscribers.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item ">{sub.name}</span>
              <span className="grid-item ">{sub.phone}</span>
              <button className=" del-btn" >Delete</button>
            </div>
          })
          }
         
        </div>

      </div>
    );
  }
}
export default App;
