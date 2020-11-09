import React, {Component} from 'react';
import Home from "./components/home";

class App extends Component {
    state = {
        students: [
            {id: 1, name: "John", city: "New York"},
            {id: 2, name: "Cap", city: "Milan"},
            {id: 3, name: "Alica", city: "Manchester"}
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
        let student = null;
        if (this.state.showStudents) {
            student = (
                <div>
                    {this.state.students.map(item => (
                        <Home key={item.id}
                              name={item.name}
                              city={item.city}
                        >
                            Hello, working on e-commerce project.
                        </Home>
                    ))}
                </div>
            )
        } else {
            student = (
                <div>
                    <p>No data to show</p>
                </div>
            )
        }
        return (
            <div>
                <h1>Test File, First day at office.</h1>
                <button onClick={this.handleToggleForStudent}>Show Students</button>
                {student}
            </div>
        );
    }
}

export default App;