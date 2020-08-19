import React, { Component } from 'react';
import { Card ,CardImg ,CardText , CardBody,CardTitle, CardImgOverlay, Breadcrumb , BreadcrumbItem, Col,Row,Button,Label,Modal ,ModalBody,ModalHeader} from 'reactstrap';
import Menu from './Menucompo';
import {Link } from 'react-router-dom';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
import {Control,LocalForm,Errors,values} from 'react-redux-form';

    function  RenderDish({dish}) {
                if (dish != null)
                    return(
                        <div className="col-12 col-md-5 m-1">
                        
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <div className="text-left">
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                            </div>
                            </CardBody>
                        </Card>
                        </div>
                    );
                else{
                    return(
                        <div></div>
                    );}}

    function    Rendercomments({comments}){
                    if(comments!=null)
                    {
                        return(
                    <div className="col-12 col-md-5">
                        <h4 className="text-left">Comments</h4>
                        <ul className="unstyled-list text-left">
                            {comments.map((comment)=>{
                        return(
                            
                            <ul className="text-left">

                                {comment.comment}
                                <br /><br />
                                --{comment.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                                <br /><br />
                            </ul>
                            );

                            })}
                        </ul>
                        <CommentForm />
                        </div>
                    )}
                    else{
                            return(
                                <div></div>
                            );
                        }}

            class CommentForm extends Component{
                constructor(props){
                    super(props);
                    this.state = {
                        isNavOpen:'false',
                        isModalOpn:'false'
                    }

                this.toggleModl = this.toggleModl.bind(this);
                this.hndlsubmit=this.hndlsubmit.bind(this);
                }
            
                toggleModl(){
                    this.setState({
                        isModalOpn :!this.state.isModalOpn
                    });
                }
                hndlsubmit(values){
                    this.toggleModl();
                    console.log('Current State is:'+ JSON.stringify(values));
                    alert('Current state is: '+JSON.stringify(values));
                }

                render(){
                    const required = (val) => val && val.length;
                    const maxLength = (len) => (val) => !(val) || (val.length <= len);
                    const minLength = (len) => (val) => val && (val.length >= len);

                    
                    return(
                        <div>
                            <Button  outline onClick={this.toggleModl}><span className='fa fa-pencil'>Submit Comment</span></Button>   
                            <Modal isOpen={this.state.isModalOpn} toggle={this.toggleModl}>
                            <ModalHeader toggle={this.toggleModl}>Submit Comment</ModalHeader>
                            <ModalBody>
                                <LocalForm onSubmit={(values) => this.hndlsubmit(values)}>
                                <Row className="form-group">
                                    <Label htmlFor="Rating" md={2}>Rating</Label>
                                    <Col md={10}>
                                        <Control.select model=".name" id="Rating" name="Rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </Control.select>
                                    </Col>
                                </Row>

                                <Row className="form-group">
                                    <Label htmlFor="name" md={2}>Your Name</Label>
                                    <Col md={10}>
                                        <Control.text model=".name" id="Yourname" name="YourName"
                                            placeholder="Your Name"
                                            className="form-control"
                                            validators={{
                                                required, minLength: minLength(3), maxLength: maxLength(15)
                                            }}
                                            />
                                        <Errors
                                            className="text-danger"
                                            model=".name"
                                            show="touched"
                                            messages={{
                                                required: 'Required',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be 15 characters or less'
                                            }}
                                        />
                                        
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                    <Label htmlFor="comments" md={2}>Comment</Label>
                                    <Col md={10}>
                                        <Control.textarea model=".name" id="comment" name="Comment"
                                            rows="12" className="form-control"/>
                                            
                                    </Col>
                                </Row>
                                <Row className="form-group">
                                <Col md={{size:10, offset: 2}}>
                                                <Button type="submit" color="primary">
                                                Submit
                                                </Button>
                                            </Col>
                                </Row>
                                

                                </LocalForm>
                            </ModalBody>
                        </Modal>
                        </div>
                            );
                        
            }
        };

        const Dishdetail = (props) => {
            if(props.dish!=null){
            return(
                <div className="container">
                     <div className="row">
            <Breadcrumb>
                <BreadcrumbItem> <Link to='/menu'>Menu</Link> </BreadcrumbItem>
                <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
                <h3>
                    {props.dish.name}
                </h3>
                <hr />
            </div>
            </div>
                <div className="row">
                    < RenderDish dish={props.dish}/> 
                    < Rendercomments comments = {props.comments} />
                    </div>
                </div>
            );}
        else{
            return(
            <div></div>)
        }}
            
            export default Dishdetail;
