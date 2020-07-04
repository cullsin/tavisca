import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormGroup, Col, Input, Button, FormFeedback } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { setCardRequest } from 'db/action/card';

class CardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serverError: '',  
      error: {
         isEmpty : false
      },  
      name: '',
      id: ''
    };
  }

  handleChange = (event) => {
    const object = this.state;
    const value = event.target.value;
    object[event.target.name] = value
    this.setState(object);
  }

  postCard = () => {
    const data = this.state;
    if(data.name.trim().length === 0) {
        data.error.isEmpty = true
        this.setState(data)
    } else {
        this.props.setCardRequest(this.state);
    }    
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.setCard && nextProps.setCard.status === 'positive') {
        this.props.history.push('/')
    } 

    if(nextProps.setCard && nextProps.setCard.status === 'negative') {
        this.setState({
            serverError: nextProps.setCard.message
        })
    }
  }

  cancel = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <React.Fragment>
       <div className='card'>
        <div className='card-header'>
              <h5> Manage Card Information </h5>
        </div> 
        <div className='card-body'> 
        <Form>
          <FormGroup row>
            <Col sm={2}>
              Name
            </Col>
            <Col sm={10}>
              <Input name="name" 
                placeholder="Name"
                maxLength={20}
                value={this.state.name}  
                onChange={this.handleChange}  invalid={this.state.error.isEmpty} />
                { this.state.error.isEmpty && 
                    <FormFeedback>Card name cannot be empty </FormFeedback> }
                { this.state.serverError  && 
                    <FormFeedback>{this.state.serverError}</FormFeedback> }        
            </Col>
          </FormGroup>
          <FormGroup row>
            <Col sm={12}>
              <Input name="id"
                 value={this.state.id}
                 type='hidden'
              />
            </Col>
          </FormGroup>
        </Form>
        </div>
        <div className='card-footer'>
        <FormGroup row>
          <Col xs={6}>    
              <Button type="button" onClick={this.postCard} >Submit</Button>
          </Col>
          <Col xs={6}>          
              <Button type="button" className={'btn btn-info ml-auto pull-right float-right'} onClick={this.cancel} > Cancel </Button>
          </Col>
          </FormGroup>
        </div>
       </div>
      </React.Fragment>    
    );
  }
}

const mapStateToProps = state => ({
  setCard: state.card.setCard,
  isLoading: state.loading.items.isLoading
});

function matchDispatchToProps(dispatch) {
return bindActionCreators({ setCardRequest }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(CardForm));