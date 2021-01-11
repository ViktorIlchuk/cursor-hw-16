import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import contacts from './contactsData';
import './Contacts.css';

class Contacts extends Component{
    state = {
        contacts,
        search: '',
        filteredContacts: [],
        showMan: true,
        showWoman: true
    };
    
    changeSearch = event => {
        this.setState({search: event.target.value.trim()});
    }

    
    dataHandler = () => {
        let result = null;
        if(this.state.showMan && this.state.showWoman) {
            result = this.state.contacts;
        }
        else if(!this.state.showMan && !this.state.showWoman) {
            result = this.state.contacts.filter( contact =>  contact.gender !== 'male' && contact.gender !== 'female')
        }
        else if(!this.state.showMan) {
            result = this.state.contacts.filter( contact => 
                this.state.showWoman && (contact.gender === 'female' || contact.gender === undefined))
        }
        else if(!this.state.showWoman) {
            result = this.state.contacts.filter( contact => 
                this.state.showMan && (contact.gender === 'male' || contact.gender === undefined))
        }  
        return result   
    }

    render() {              
        return (
            <div>
                <form>
                    <input className='searchInput' onChange={this.changeSearch} placeholder={'Enter search text...'} type="text"/>
                    <p>Gender:</p>
                    <label>
                        Man:
                        <input 
                            checked={this.state.showMan}
                            onChange={() => this.setState({showMan: !this.state.showMan})}
                            type="checkbox" 
                        />
                    </label>
                    <label>
                        Woman:
                        <input 
                            checked={this.state.showWoman}
                            onChange={() => this.setState({showWoman: !this.state.showWoman})}
                            type="checkbox" 
                        />
                    </label>
                </form>
                <div className='Contacts'>
                    {this.dataHandler().filter( contact => `${contact.firstName}${contact.lastName}${contact.phone}`.toLowerCase()
                        .includes(this.state.search.toLowerCase()))
                        .map( contact => <Contact {...contact} key={contact.phone} />)}
                </div>
            </div>
        )
    };
}; 

export default Contacts;