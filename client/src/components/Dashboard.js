import React, { Component } from 'react'

import ButtonList from './ButtonList'

export default class Dashboard extends Component {

    render() {
        return (
            <div className="row">
                <div className="col">
                    <ButtonList />
                </div>
            </div>
        )
    }
}