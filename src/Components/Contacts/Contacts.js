import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import './Contacts.css';

class Contacts extends Component{
    state = {
        contacts: [{
            firstName: "Барней",
            lastName: "Стинсовський",
            phone: "+380956319521",
            gender: "male"
        }, {
            firstName: "Робін",
            lastName: "Щербатська",
            phone: "+380931460123",
            gender: "female"
        }, {
            firstName: "Анонімний",
            lastName: "Анонімус",
            phone: "+380666666666"
        }, {
            firstName: "Лілія",
            lastName: "Олдровна",
            phone: "+380504691254",
            gender: "female"
        }, {
            firstName: "Маршен",
            lastName: "Еріксонян",
            phone: "+380739432123",
            gender: "male"
        }, {
            firstName: "Теодор",
            lastName: "Мотсбес",
            phone: "+380956319521",
            gender: "male"
        }],
        search: '',
        filteredContacts: [],
        showMan: true,
        showWoman: true
    };

    
    handleSearchChange = () => {
        const contacts = this.state.contacts;
        const inputValue = this.state.search.toLowerCase();
        
        const filteredContacts = contacts
            .filter(el => `${el.firstName}${el.lastName}${el.phone}`.toLowerCase().includes(inputValue));
            
        this.setState({filteredContacts})
    };
    
    changeSearch = event => {
        this.setState({search: event.target.value});
        this.handleSearchChange();
    }

    filterMan = () => {  
        if(this.state.showMan){
            const dataSource = this.state.filteredContacts.length ? this.state.filteredContacts : this.state.contacts;
            const filteredContacts = dataSource.filter(el => el.gender !== 'male');    
            this.setState({ filteredContacts })
        }else{
            this.setState({ filteredContacts: [] })
        }
        this.setState({showMan: !this.state.showMan})
    }

    filterWoman = () => {
        if(this.state.showWoman){
            const dataSource = this.state.filteredContacts.length ? this.state.filteredContacts : this.state.contacts;
            const filteredContacts = dataSource.filter(el => el.gender !== 'female');    
            this.setState({ filteredContacts })
        }else{
            this.setState({ filteredContacts: [] })
        }
        this.setState({showWoman: !this.state.showWoman})
    }

    dataHandler = () => this.state.filteredContacts.length > 0 ? this.state.filteredContacts : this.state.contacts;
    

    render() {              
        return (
            <div>
                <form>
                    <input className='searchInput' onChange={this.changeSearch} type="text"/>
                    <p>Gender:</p>
                    <label>
                        Man:
                        <input 
                            checked={this.state.showMan}
                            onChange={this.filterMan}
                            type="checkbox" 
                        />
                    </label>
                    <label>
                        Woman:
                        <input 
                            checked={this.state.showWoman}
                            onChange={this.filterWoman}
                            type="checkbox" 
                        />
                    </label>
                </form>
                <div className='Contacts'>
                    { this.dataHandler().map((contact, i) => <Contact {...contact} key={i} />)}
                </div>
            </div>
        )
    };
}; 

export default Contacts;