import React, { Component } from 'react';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            aNumber: 16
        }
    }

    componentDidMount() {
        //api requests go here
    }

    increment = () => {
        this.setState({
            aNumber: this.state.aNumber = this.state.aNumber + 1000
        })
    }

    decrement = () => {
        this.setState({
            aNumber: this.state.aNumber = this.state.aNumber - 1000
        })
    }
    render() {
        return(
        <div>
            <form>
                <div><input placeholder ='email or username'  /></div>
                <br/>
                <div><input placeholder ='password' /></div>
                <br/><button>get started</button>
            </form>
        </div>
        )
    }
}
export default Home;