import React, { Component } from 'react'
import { MDBInput } from 'mdbreact'
import axios from 'axios';

import { Button } from 'react-bootstrap'

import ButtonCard from './ButtonCard'

export default class ButtonList extends Component {
    //https://emsig-buttons.herokuapp.com/usershttp://localhost:5000/users
    state= {
        url: "https://emsig-buttons.herokuapp.com/users",
        button: null,
        search: '',
        cardChecked: {}

    }

    onchange = e => {
        this.setState({search: e.target.value})
    }

    checkCard= (button, e) => {
        let cardChecked = this.state.cardChecked
        if(button.check){
            cardChecked.push[button.name] = e.target.checked
            this.setState({cardChecked});
        }
        console.log(cardChecked)
    }


    renderButton = button => {
        if (this.state.button.length <= 0) {
            return <div>Loading..</div>
        }

        const {search} = this.state

        let combine = button.name + ' ' + button.description
        
        // if(search !== "" && button.name.toLowerCase().indexOf(search.toLowerCase()) === -1 && button.description.toLowerCase().indexOf(search.toLowerCase()) === -1){
        //     return null;
        // }

        if(search !== "" && combine.toLowerCase().indexOf(search.toLowerCase()) === -1 ){
            return null;
        }
        return(
            
            <ButtonCard
                key={button.name}
                name={button.name}
                url={button.url} 
                description={button.description}
            />)

    }

    async componentDidMount() {
        const res = await axios.get(this.state.url);
        this.setState({button: res.data['data']});

    }

    render() {
        return (
            <React.Fragment>
                 <br></br>
                <br></br>
                <br></br>
                <div className='row' >
                    <div className='col'>
                        <MDBInput icon="search" type='text' hint='Search' onChange={this.onchange}/>
                    </div>
                    <div className='col'>
                        <Button style={{width: '10em'}}variant='secondary'> Print </Button>
                        <MDBInput type='textarea' disabled label='compress' hint={this.state.cardChecked}></MDBInput>

                    </div>
               
                </div>

                <div>
                {this.state.button ? (
                    <div className='row'>
                        {this.state.button.map(button => {
                            return this.renderButton(button)
                            
                        })}
                    </div>
                    
                ) : (
                    <h1>Loading Buttons</h1>
                    )}
                    </div>
            </React.Fragment>
        )
    }
}
