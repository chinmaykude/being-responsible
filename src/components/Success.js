import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Success extends Component {
    componentDidMount(){
        this.x = setTimeout(() => {
            this.handleRedirect()
        },3000)
    }

    handleRedirect = () =>{
        this.props.history.push('/')
    }

    componentWillUnmount(){
        clearTimeout(this.x)
    }

    render() {
        return (
            <div>
                <Navbar />
                <div className='container text-center text-success'>
                    <h1>Issue reported successfully...!!!</h1>
                    <h1>Thank You</h1>
                </div>
            </div>
        )
    }
}
