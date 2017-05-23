import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';

class ContactListPage extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  
	  this.state = {
	    names: []
	  };
	  
	  this.addName = this.addName.bind(this);
	}

  addName(name) {
    const { names } = this.state;

    if (name === '') {
    	console.log('add a name first!')
    } else {
    	this.setState({
	      names: names.concat(name)
	    });
    }
  };

  render() {
    const { names } = this.state;
    
    const named = names.map((name, i) => (
      <li key={i}>{name}</li>
    ));
    
    return (
      <div className="field-line">
        <NewName addName={this.addName} />
        <ul className='new-name'>
          {named}
        </ul>
      </div>
    );
  }
}


class NewName extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  
	  this.state = {
	    name: [],
	    textFieldValue: ''
	  };
	  
	  this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
	  this.addNewName = this.addNewName.bind(this);
	}

  _handleTextFieldChange(e) {
    this.setState({
      textFieldValue: e.target.value
    });
  }
  
  addNewName() {
    const { addName } = this.props;
    const name = this.state.textFieldValue;
    
    addName(name);
    this.state.textFieldValue = ''
  };

  render() {
    return (
      <Card>
      	<CardText>
	      	<div className="field-line">
	      		<TextField
		          floatingLabelText="Add Name"
		          name="name"
		          value={this.state.textFieldValue} 
		          onChange={this._handleTextFieldChange}
		        />
		        <FloatingActionButton className='fab' onClick={this.addNewName}>
						   <i className="material-icons fab-icon" style={{color: 'white'}}>+</i>
						</FloatingActionButton>
						<div className='contact-list'>
	        	<p>New names:</p>
	        </div>
		       </div>

		      
	       </CardText>
      </Card>
    );
  }
}


export default ContactListPage;