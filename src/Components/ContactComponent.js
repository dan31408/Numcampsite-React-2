import React, { Component, useState } from 'react';
import { Card, Button, Modal, ModalHeader,
     ModalBody, ModalFooter, CardImg, CardText, CardBody, CardTitle,
     Form, Label, Input, Col, Row } from 'reactstrap';
     import { Control, LocalForm, Errors } from 'react-redux-form';

     const required = val => val && val.length;
     const maxLength = len => val => !val || (val.length <= len);


   function RenderCampsite({campsite}) {        
        return (
            <div className="col-md-5 m-1">
                <Card>
                    <CardImg top src={campsite.img} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
        }


    function RenderComments({comments}) {
        if (comments) {
            return(
                <div className="col-md-5 m-1">
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return(
                            <div key={comment.id}>
                    <p>{comment.text}<br />
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short',
                    day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                    </p>
                            </div>
                        );
                    })}
                    <SubmitComment/>
                </div>
            );
        }
    }



        function CampsiteInfo(props) {
            if (props.campsite) {
                return (
                    <div className="container">
                        <div className="row">
                            <RenderCampsite campsite={props.campsite} />
                            <RenderComments comments={props.comments} />                          
                        </div>
                    </div>
                );
            }
            return <div />;
        }
        
        const CommentModal = (props) => {
            const {
              buttonLabel,
              className
            } = props;
          
            const [modal, setModal] = useState(false);
          
            const toggle = () => setModal(!modal);

            return (
                <LocalForm onSubmit={values => this.handleSubmit(values)}>
                <div>
                  <Button color="dark" onClick={toggle}>Add Comment</Button>
                  <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
                    toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                    <ModalBody>

                        <Form>
                            <div className="container">
                        <Row className="form-group" row>
                         <Label for="exampleSelectMulti">Rating</Label>
                         
                     <Input type="select" name="selectMulti" id="exampleSelectMulti">
                     <option>1</option>
                     <option>2</option>
                     <option>3</option>
                     <option>4</option>
                     <option>5</option>
                     </Input>
                 </Row>
                 </div>
                 <Row className="form-group">
                 
        <Label for="name" id="yourName" sm={6}>Your Name</Label>
        <Col sm={10}>                     
                               
          <Input type="email" name="email" id="exampleEmail" placeholder="Your Name" />
        </Col>
      </Row>
      <Row className="form-group">
        <Label for="exampleText" sm={6}>Comment</Label>
        <Col sm={10}>
          <Input type="textarea" name="text" id="exampleText" />
        </Col>
      </Row>
      </Form>
                    </ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggle}>Submit</Button>{' '}
                    </ModalFooter>
                  </Modal>
                </div>
                </LocalForm>
              );
            }
            

   class SubmitComment extends Component {
       render(){
           return(
               <CommentModal/>
           )
       }
   }

       
        
        
                                                             
          
 
export default CampsiteInfo;