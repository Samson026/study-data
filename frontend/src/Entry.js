import React from 'react'
import './Entry.css'


class Entry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visable: true,
        };
    }

    toggleShow = () => {
        this.setState({visable: !this.state.visable});
    }

    submit = () => {
        console.log("Submit data");
        console.log(this.inputNode.value);
        var data = {"LISTENING" : this.inputNode.value}

        fetch("/api/manual-input",
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
        )
            .then(response => response.json())
            .then(data => console.log(data));

        this.setState({visable: !this.state.visable});   
    }

    render() {
        if (this.state.visable) {
            return (
                <div className='Entry-Div'>
                    <h3>Manual Data Entry</h3>
                    <form>
                        <input type="text" ref={node => (this.inputNode = node)}></input>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                        <input type="text"></input>
                        <br></br>
                    </form>
                    <button id='Submit-Button' onClick={this.submit}>Submit</button>
                    <button id='Submit-Button' onClick={this.toggleShow}>Close</button>
                </div>
            )
        }
        else {
            return (
                <div className='Entry-Div'>
                    <button onClick={this.toggleShow}>Enter Manual Data</button>
                </div>
            )
        }
            
    }

}

export default Entry