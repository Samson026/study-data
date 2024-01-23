import React from 'react'

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
                console.log(data);
                this.setState({value: data["lines"]});
            })
            .catch((error) => console.log(error));
    }

    render() {
        console.log(this.state);
        return (
            <table>
                <tr>
                    <th>Listening</th>
                    <th>Reading</th>
                    <th>Writing</th>
                </tr>
                <tr>
                    <th>this.value["listening"]</th>
                    <th>this.value["reading"]</th>
                    <th>this.value["writing"]</th>
                </tr>
            </table>
    
        )
    }
}

export default Data