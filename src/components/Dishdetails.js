import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card ,CardImg ,CardText , CardBody,CardTitle, CardImgOverlay } from 'reactstrap';
import Menu from './Menucompo';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';
class Dishdetail extends Component{
    constructor(props){
        super(props);
    
    }
    renderDish(dish) {
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
    rendercomments(comments){
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

  

        render() {
            if(this.props.dish!=null){
            return(
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.rendercomments(this.props.dish.comments)}
                </div>
            );}
        else{
            return(
            <div></div>)
        }}}
            
            export default Dishdetail;
