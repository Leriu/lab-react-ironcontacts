import React, { Component } from 'react';

class ContactRow extends Component {
    render(){
        var stilo = {
            width: '50px',
            heigth: '50px'
        }
        return <tr>
            <td><img style={stilo} src={this.props.contact.picture} alt="contactimage"></img></td>
            <td>{this.props.contact.name}</td>
            <td>{this.props.contact.popularity}</td>
        </tr>
    }
}

export default ContactRow;