import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { bindActionCreators } from 'redux';
import {  fetchCardRequest, deleteCardRequest } from 'db/action/card';
import { FormGroup, Col, Input, InputGroup, InputGroupAddon, InputGroupText, ListGroup, ListGroupItem } from 'reactstrap';
import confirm from "reactstrap-confirm"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class CardList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      selectedItem: {}
    }
  }

  handleChange = (event)  => {
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object, () => {
        this.props.fetchCardRequest(this.state);    
    });
  }
  
  searchCard = () => {
    this.props.fetchCardRequest(this.state);
  }

  UNSAFE_componentWillMount() {
    if(!this.props.list)
    this.props.fetchCardRequest(this.state);
  }

  removeCard = async (item) => {

    let result = await confirm({
      title: (
        <>
            Removing Card from the System
        </>
      ),
    message: "Are you sure that you want to delete ?",
    confirmText: "proceed",
    confirmColor: "primary",
    cancelColor: "link text-danger"
      });

    if(result) {
        this.setState({
          selectedItem: item
        })
    }
    result && this.props.deleteCardRequest(item);

  }

  componentDidUpdate(prevPros, prevState) {
    if(prevState.delete !== this.props.delete) {
      if(this.props.location.pathname.includes(prevState.selectedItem.id)) {
            this.props.history.push('/')
      } else {
        this.props.fetchCardRequest(this.state)
      }  
    }
 }

  render() {
    return (
      <React.Fragment>
        <div className='card mt-3'>
            <div className='card-body'> 
              <Link to={'/card'} id='create-card' className={'btn btn-success ml-auto'}> Create Card </Link>
            </div>
        </div>   
        <div className='card mt-3'>
            <div className='card-body'> 
                <FormGroup row>
                <Col md={12}>  
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                        <InputGroupText> Search
                        </InputGroupText>
                        </InputGroupAddon>
                        <Input 
                            name={'keyword'}     
                            value={this.state.keyword}  
                            onChange={this.handleChange} />
                    </InputGroup>
                </Col>    
            </FormGroup>
          </div>
        </div>
        <div className='card mt-3'>
            <div className='card-body'>
                <ListGroup>                 
                {
                    this.props.list && this.props.list.map((item, key) => {
                        return(
                            <ListGroupItem key={key} id={item.name}> 
                            <Link to={`/card/${item.id}/tasks`} >
                                <FontAwesomeIcon icon="id-card" />  {item.name} 
                            </Link> 
                            <FontAwesomeIcon icon="trash" 
                              id={`ic${item.name}`}
                              className={'float-right cursor-pointer'} 
                              onClick={() => this.removeCard(item)}/>
                            </ListGroupItem>  
                        )
                    })
                }
                </ListGroup>
            </div>
        </div>
        { (!this.props.list || this.props.list.length === 0) && 
          <div className='card mt-3'>
                <div className='card-body'>
                        <center> Please create an awesome card </center>
                </div>
          </div>
        }  
      </React.Fragment>    
    );
  }
}

const mapStateToProps = state => ({
   list: state.card.list,
   delete:state.card.delete,
   isLoading: state.loading.items.isLoading
});

function matchDispatchToProps(dispatch) {
return bindActionCreators({ fetchCardRequest, deleteCardRequest }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(CardList));