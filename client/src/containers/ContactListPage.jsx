import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';

class ContactListPage extends React.Component {
	constructor(props, context) {
	  super(props, context);
	  
	  this.state = {
	    names: []
	  };
	  
	  this.addName = this.addName.bind(this);
	  this.deleteName = this.deleteName.bind(this);
	}

  addName(name) {
    const { names } = this.state;

    if (name === '') {
    	console.log('add a name first!')
    } else {
    	this.setState({
	      names: names.concat([{
	      	name: name
	      }])
	    });
    }
  }

	deleteName(name) {
		const { names } = this.state;

    this.setState((prevState) => ({
    	// names: names.filter(name => name.id !== id)
      names: prevState.names.filter(_name => name !== _name)
    }));
	}

  render() {
    const { names } = this.state;
    
    const named = names.map((name, i) => (
    	<Card key={i} className='todo-list'>
	    	<CardText>
		      <li>{name.name} 	
		      	<FloatingActionButton className='fab-delete' mini onClick={this.deleteName.bind(null, name)}>
						   <i className="material-icons fab-icon-delete" style={{color: 'white'}}>-</i>
						</FloatingActionButton>
		      </li>
	    	</CardText>
    	</Card>
    ));
    
    return (
    	<div className='contact-list'>
	      <div className="field-line">
	        <NewName addName={this.addName} />
	        <ul className='new-name'>
	          {named}
	        </ul>
	      </div>
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
	  
	  this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
	  this.addNewName = this.addNewName.bind(this);
	}

  handleTextFieldChange(e) {
    this.setState({
      textFieldValue: e.target.value
    });
  }
  
  addNewName() {
    const { addName } = this.props;
    const name = this.state.textFieldValue;
    
    addName(name);
    this.state.textFieldValue = ''
  }

  render() {
    return (
      <Card>
      	<CardText>
      		{/*	
      			{errors.summary && <p className="error-message">{errors.summary}</p>}
						errorText={errors.name} -> goes on <TextField>??
      	 	*/}
	      	<div className='form-box'>
	      		<TextField
		          floatingLabelText="Add Name"
		          name="name"
		          value={this.state.textFieldValue} 
		          onChange={this.handleTextFieldChange}    
		        />
		      
		        <FloatingActionButton className='fab-add' onClick={this.addNewName} mini>
						   <i className="material-icons fab-icon" style={{color: 'white'}}>+</i>
						</FloatingActionButton>
		       
		      </div>
	       </CardText>
      </Card>
    );
  }
}


// NewName.propTypes = {
//   errors: PropTypes.object.isRequired
// };


export default ContactListPage;