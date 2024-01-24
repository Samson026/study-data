import React from 'react'
import './Data.css'

class Data extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    componentDidMount() {
        fetch("/api/get-data")
            .then((response) => response.json())
            .then((data) => {
                this.setState({value: data});
            })
            .catch((error) => console.log(error));
    }

    render() {
        console.log(this.state);
        if (this.state.value == null) {
            return(
                <p>Loading</p>
            ) 
        }
        else {
            return (
                <div className='Data-Div'>
                    <table className='Data-Table'>
                        <tbody>
                            <tr>
                                <th>{this.state.value["ID"][0]}</th>
                                <th>{this.state.value["ID"][1]}</th>
                                <th>{this.state.value["ID"][2]}</th>
                            </tr>
                            <tr>
                                <th>{this.state.value["MINS"][0]}</th>
                                <th>{this.state.value["MINS"][1]}</th>
                                <th>{this.state.value["MINS"][2]}</th>
                            </tr>
                        </tbody>
                    </table>
                    <h3>Total Hours: {
                            this.state.value["MINS"][0] + this.state.value["MINS"][1] + this.state.value["MINS"][2]
                        }
                    </h3>
                </div>
            )
        }
    }
}

export default Data