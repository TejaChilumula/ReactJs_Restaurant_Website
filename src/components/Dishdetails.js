import React, { Component } from 'react';
import { Card ,CardImg ,CardText , CardBody,CardTitle, CardImgOverlay, Breadcrumb , BreadcrumbItem} from 'reactstrap';
import Menu from './Menucompo';
import {Link } from 'react-router-dom';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

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
                        )

                            })}
                        </ul>
                        </div>
                    )}
                    else{
                            return(
                                <div></div>
                            )
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
