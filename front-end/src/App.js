import React, {Component} from 'react';
import Statuses from './components/statuses';
import 'bootstrap/dist/css/bootstrap.min.css';
class App extends Component {
    render() {
        return (
            <Statuses statuses={this.state.statuses} />
        )
    }

    state = {
        statuses: []
    };

    componentDidMount() {
        fetch('http://localhost:7071/api/down-detector',{
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin":"*"
              }
        })
            .then(res => res.json())
            .then((data) => {
                this.setState({ statuses: data })
            })
            .catch(console.log)
    }
}

export default App;