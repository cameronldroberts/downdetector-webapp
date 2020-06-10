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
        fetch('https://down-detector.azurewebsites.net/api/down-detector')
            .then(res => res.json())
            .then((data) => {
                this.setState({ statuses: data })
            })
            .catch(console.log)
    }
}

export default App;