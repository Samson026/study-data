import React from 'react'


class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visable: false,
        };
    }

    toggleShow = () => {
        this.setState({visable: !this.state.visable});
    }

    submit = () => {
        console.log("Submit data");
        this.setState({visable: !this.state.visable});   
    }

    render() {
        if (this.state.visable) {
            return (
                <div>
                    <h3>Manual Data Entry</h3>
                    <form>
                        <input type="text"></input>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                    </form>
                    <button onClick={this.submit}>Submit</button>
                    <button onClick={this.toggleShow}>Close</button>
                </div>
            )
        }
        else {
            return (
                <button onClick={this.toggleShow}>Enter Manual Data</button>
            )
        }
            
    }

}

export default Entry