import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { bindActionCreators } from 'redux';
import {  fetchTaskRequest, moveTaskRequest, deleteTaskRequest } from 'db/action/task';
import { FormGroup, Col, Input, InputGroup, InputGroupAddon, InputGroupText, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { Typeahead } from 'react-bootstrap-typeahead';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import confirm from "reactstrap-confirm"
import Menu from './menu'

class TaskList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      card: {},
      transit: [],
      selected:[],
      isSelected: false,
      forceReset : false,
      selectedItem: {},
      tasklist:[],
      offset:0
    }
  }

  loadMore = () => {
      this.setState( {
        offset : this.state.offset + 3
      }, () => {
        this.props.fetchTaskRequest(this.state)
      })
  }

  submitChange = (event)  => {
    let object = {};
    object.tasklist = []
    object.forceReset = true
    object.offset = 0
    this.setState(object, () => {
        this.props.fetchTaskRequest(this.state);    
    });
  }
  
  handleChange = (event)  => {
    let object = {};
    object[event.target.name] = event.target.value;
    this.setState(object)
  }
  
  setCard = (props) => {
    if(props.match.params.id) {
      const card = props.cardlist.filter((item) => item.id === props.match.params.id)
      this.setState({card : card.length ? card[0] : {}, offset: 0, taskdata: [], forceReset : true }, () =>{
          this.props.fetchTaskRequest(this.state)
      })
    }
  }

  componentDidMount() {
    this.setCard(this.props)
  }

  static getDerivedStateFromProps(props, state) {
    
    let data = state
   
    /*
    if(props.cardlist) {
      if(state.card && state.card.id !== props.match.params.id) {
        const card = props.cardlist.filter((item) => item.id === props.match.params.id)
        if(card.length && state.card && state.card.id !== card[0].id) {
            data.card =card[0]
        }
      }  
    }  
    */

    if(props.taskdata && props.taskdata.list) {
      const incoming = props.taskdata.list[props.taskdata.list.length - 1]
      const existing = data.tasklist[data.tasklist.length -1]
     
      if(!existing || !incoming) {
        data.tasklist = props.taskdata.list ? data.tasklist.concat(props.taskdata.list) : data.tasklist
      } else if(incoming.id !== existing.id) {
        data.tasklist = props.taskdata.list ? data.tasklist.concat(props.taskdata.list) : data.tasklist
      }
    }

    if(state.forceReset === true) {
        data.tasklist = []
        data.forceReset = false
    }

    return data;

  }

  capture = (e, selectedItem) => {
     let { transit } = this.state;
     if(e.target.checked) {
        transit.push(selectedItem)
     } else { 
        transit = transit.filter((item) => item.id !== selectedItem.id)
     }
  }

  componentDidUpdate(prevPros, prevState) {

    if(this.props.match.params.id !== prevPros.match.params.id) {
      this.setCard(this.props)
    }

    if(prevState.card.id !== this.state.card.id) {
      this.props.fetchTaskRequest(this.state)
    }

    if(prevState.card.id !== this.state.card.id) {
      this.props.fetchTaskRequest(this.state)
    }

    if(this.props.movelist !== prevPros.movelist) {
        this.props.fetchTaskRequest(this.state)
    } 

    if(prevState.delete !== this.props.delete) {
          this.props.fetchTaskRequest(this.state)
    }  
  
  }
 
  move = () => {
      this.setState({
        tasklist : [],
        forceReset: true,
        offset: 0
      }, () => {   
        if(this.state.selected.length > 0 && this.state.transit.length > 0) {
          this.props.moveTaskRequest(this.state)
        } else {  
          this.setState({
            isSelected : false
          })
        }
      })  
  }

  removeTask = async (item) => {

    let result = await confirm({
      title: (
        <>
            Removing Task from the Card
        </>
      ),
    message: "Are you sure that you want to delete ?",
    confirmText: "proceed",
    confirmColor: "primary",
    cancelColor: "link text-danger"
      });

    if(result) {
        this.setState({
          selectedItem: item,
          tasklist : [],
          forceReset: true,
          offset: 0
        }, () => {
          this.props.deleteTaskRequest(item)
        })
    }
  }

  render() {

    let isShow = false;
    if(!this.props.taskdata)
    isShow = false
    else if(this.props.taskdata.total > this.state.tasklist.length) 
    isShow = true
    if(!this.state.card.id) {
      return(  
        <div className='row justify-content-center'>
          <div className='col-md-6 top-gap'>
                <h3 id={'no-task'}> Choose any Card from the list </h3>
          </div>
        </div>  
      )
    }
    return (
      <React.Fragment>
         <div className='card mt-3'>
            <div className='card-body'>
          <h4 className={'mt-3'}> 
            {this.state.card.name} 
          </h4> 
        </div>
        </div>
        <Menu cardId={this.state.card.id} />
        <div className='card mt-3'>
            <div className='card-body'> 
                <FormGroup row>
                <Col md={6}>
                  <FormGroup>  
                    <InputGroup>
                          <Input 
                            name={'keyword'}     
                            value={this.state.keyword}  
                            onChange={this.handleChange} />

                        <InputGroupAddon addonType="append">
                        <InputGroupText> 
                        <span className={'cursor-pointer'} onClick={() => this.submitChange()}>search</span>
                        </InputGroupText>
                        </InputGroupAddon>
                    
                    </InputGroup>
                    </FormGroup>
                </Col>    
                <Col md={6}>  
                <FormGroup>
                    <InputGroup>
                      <Typeahead
                              {...this.state}
                              labelKey={"name"}
                              id={"basic-example"}
                              onChange={selected => this.setState({ selected })}
                              options={this.props.cardlist}
                              placeholder="Choose a card..."
                        />
                        <InputGroupAddon addonType="append">
                        <InputGroupText>
                        <span  className={'cursor-pointer'} onClick={() => this.move()}>Move</span>
                        </InputGroupText>
                        </InputGroupAddon>
                            
                    </InputGroup>
                  </FormGroup>  
                </Col>    
            </FormGroup>
          </div>
        </div>
        <div className='card mt-3'>
            <div className='card-body'>
                <ListGroup>                 
                {
                    this.state.tasklist && this.state.tasklist.map((item, key) => {
                        return(
                            <ListGroupItem key={key} id={`${item.name}`}> 
                            <InputGroup>
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <Input addon type="checkbox" aria-label="Checkbox for following text input" onChange={(e) => this.capture(e,item)} />
                                </InputGroupText>
                              </InputGroupAddon>
                              <span class='form-control height-auto'>{item.name} </span>
                              <InputGroupAddon addonType="append">
                                <InputGroupText>
                                <FontAwesomeIcon icon="trash" id={`tc${item.name}`} 
                              className={'float-right cursor-pointer'} 
                              onClick={() => this.removeTask(item)}/>
                                </InputGroupText>
                              </InputGroupAddon>
                            
                            </InputGroup> 
                          </ListGroupItem>  
                        )
                    })
                }
                </ListGroup>
            </div>
        </div>
        
        { isShow && 
          <div className='card mt-3'>
                <div className='card-body'>
                  <Button type="button" className={'btn btn-primary'} onClick={() => this.loadMore()}>More</Button>
                </div>
          </div>
        }

        { this.state.tasklist.length === 0 && 
          <div className='card mt-3'>
                <div className='card-body'>
                        <center> No Tasks available for this card </center>
                </div>
          </div>
        }

      </React.Fragment>    
    );
  }
}

const mapStateToProps = state => ({
   cardlist: state.card.list,
   taskdata: state.task.list,
   movelist: state.task.move,
   delete: state.task.delete,
   isLoading: state.loading.items.isLoading
});

function matchDispatchToProps(dispatch) {
return bindActionCreators({ fetchTaskRequest, moveTaskRequest, deleteTaskRequest }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(TaskList));