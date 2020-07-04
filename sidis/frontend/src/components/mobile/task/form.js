import React, { Component } from 'react';
import { connect } from "react-redux";
import { Form, FormGroup, Col, Input, Button, FormFeedback } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux'
import { setTaskRequest } from 'db/action/task';

class CardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serverError: '',  
      error: {
         isEmpty : false
      },  
      name: '',
      id: '',
      card_id:null
    };
  }

  handleChange = (event) => {
    const object = this.state;
    const value = event.target.value;
    object[event.target.name] = value
    this.setState(object);
  }

  postTask = () => {
    const data = this.state;
    if(data.name.trim().length === 0) {
        data.error.isEmpty = true
        this.setState(data)
    } else {
        this.props.setTaskRequest(this.state);
    }    
  }

  UNSAFE_componentWillMount() {
        const card_id = this.props.match.params.id
        this.setState({
            card_id
        })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if(nextProps.setTask && nextProps.setTask.status === 'positive') {
        this.props.history.push(`/card/${this.state.card_id}/tasks`)
    } 

    if(nextProps.setTask && nextProps.setTask.status === 'negative') {
        this.setState({
            serverError: nextProps.setTask.message
        })
    }
  }

  cancel = () => this.props.history.push(`/card/${this.state.card_id}/tasks`)
  
  render() {
    return (
      <React.Fragment>
       <div className='card'>
        <div className='card-header'>
              <h5> Manage Task Information </h5>
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
                maxLength={60}
                value={this.state.name}  
                onChange={this.handleChange}  invalid={this.state.error.isEmpty} />
                { this.state.error.isEmpty && 
                    <FormFeedback>Task cannot be empty </FormFeedback> }
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
              <Button type="button" onClick={this.postTask} >Submit</Button>
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
  setTask: state.task.setTask,
  isLoading: state.loading.items.isLoading
});

function matchDispatchToProps(dispatch) {
return bindActionCreators({ setTaskRequest }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(CardForm));        