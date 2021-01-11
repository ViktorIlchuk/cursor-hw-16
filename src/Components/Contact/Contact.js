import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return(
            <div className='Contact'>
                <div className='contactInfo'>
                    <p className='fullName'>{this.props.firstName} {this.props.lastName}</p>
                    <p className='gender'>{'Gender: '} {this.props.gender}</p>
                </div>
                <p className='contactNumber'>{this.props.phone}</p>
            </div> 
        )
    }
};

export default Contact;