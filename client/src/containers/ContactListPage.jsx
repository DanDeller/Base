import React from 'react';
import ReactDOM from 'react-dom';
import { Card, CardTitle, CardText } from 'material-ui/Card';

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
      <div className='class-list'>
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
	    name: '' 
	  };
	  
	  this.handleChange = this.handleChange.bind(this);
	  this.addNewName = this.addNewName.bind(this);
	}

  handleChange(e) {
    this.setState({ 
      input: e.target.value 
    });
  };
  
  addNewName() {
    const { name } = this.refs;
    const { addName } = this.props;
    
    addName(name.value);
    
    name.value = '';
  };

  render() {
    return (
      <Card>
      	<CardText>
	        <input type='text' onChange={this.handleChange} ref='name' />
	        <button onClick={this.addNewName}>Add name</button>
	        <p>New names:</p>
	       </CardText>
      </Card>
    );
  }
}


export default ContactListPage;