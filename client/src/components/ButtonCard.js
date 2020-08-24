import React, { Component } from 'react'

import { Modal, ModalBody, Button } from 'react-bootstrap'

import styled from 'styled-components'

import ReactToPrint from "react-to-print";

const Sprite = styled.img`
    width: 10em;
    height: 10em;
    display: none;
`;

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    &:hover {
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22 )
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-euser-select: none;
`;

export default class ButtonCard extends Component {
    state = {
        name: '',
        description: '',
        buttonTag: '',
        imageUrl: '',
        toManyRequests: false,
        imageLoading: true,
        show: false,
        check: false
    }

    handleCheck = check => {
        this.setState(({check}) => ({
            check: !check
        }))

    }

    componentDidMount () {

        const { name, url, description } = this.props
        const check = false
        const buttonTag = url.split("/")[url.split('/').length - 1]
        const imageUrl = `https://github.com/jkurt13/Emsig_Cards/blob/master/src/pictures/${buttonTag}?raw=true`
         
        this.setState({
            buttonTag,
            description,
            imageUrl,
            name,
            check
        })
    }
    render() {
        return (
            
            <div className='col-md-3 col-sm-6 mb-5'>
                <Card className='card'>
                <input type='checkbox' onLoad={() => this.setState({check: false})} onClick={this.handleCheck} /> 
                <div className='clickable' onClick={() =>this.setState({show: true})}>
                <h5 className="card-header">{this.state.name
                        .toLowerCase()
                        .split(" ")
                        .map(
                            letter => letter.charAt(0).toUpperCase() + letter.substring(1))
                            .join('')}
                        </h5>
                <Sprite 
                    className="card-img-top rounded mx-auto mt-2"
                    onError={() => this.setState({toManyRequests: true})}
                    src={this.state.imageUrl}
                />
                <Sprite 
                        className="card-img-top rounded mx-auto mt-2"
                        onLoad={() => this.setState({imageLoading: false})}
                        onError={() => this.setState({toManyRequests: true})}
                        src={this.state.imageUrl}
                        style={
                            this.state.toManyRequests ? { display: "none"} : 
                            this.state.imageLoading ? null : {display: "block"}
                        }
                    />
                <div className='card-body mx-auto'>
                    <h6 className="card-title" >{this.state.description} </h6>
                    </div>
                    </div>
                </Card>
                <Modal show={this.state.show} onHide={()=>this.setState({show: false})} animation={false} size='lg'>
                    <Modal.Header closeButton>
                            <h4 style={{marginRight: '13em'}}>Card Number: {this.state.name}</h4>
                            <ReactToPrint 
                                trigger={() => <Button style={{width: '10em'}}variant='secondary'> Print </Button>}
                                content={() => this.componentRef}
                                />
                    </Modal.Header>
                    <ModalBody className='print-container'>
                        <div ref={el => (this.componentRef = el)}>
                            <h4>Description: {this.state.description}</h4>                   
                            <img src={this.state.imageUrl} alt='loading' style={{width: '48em', height:'45em'}}/>
                        </div>
                    </ModalBody>
                    
                 </Modal>

            </div>
        )
    }
}
