import React, {Component} from 'react';
import Home from "./components/home";

class App extends Component {
    state = {
        students: [
            {name: "John", city: "New York"},
            {name: "Cap", city: "Milan"},
            {name: "Alica", city: "Manchester"}
        ],
        showStudents: false
    }
    handleToggleForStudent = () => {
        const showData = this.state.showStudents
        this.setState({
            showStudents: !showData
        })
    }
    render() {
        return (
            <div>
                <h1>Test File, First day at office.</h1>
                <button onClick={this.handleToggleForStudent}>Show Students</button>
                {this.state.showStudents === true ?
                    <div>
                        {this.state.students.map(item=>(
                            <Home
                                name={item.name}
                                city={item.city}
                            >
                                Hello, working on e-commerce project.
                            </Home>
                        ))}
                    </div>
                    : null}
            </div>
        );
    }
}

export default App;