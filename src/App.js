import React, { Component } from 'react';

class App extends Component{
    render(){
        return (
            <svg width={this.props.width}
                 height={this.props.height}>
                {this.props.height}
            </svg>
        );
    }
}

//data entry
var all = [/*data here*/];
var filtered = [/*data here*/];

var App = React.creatClass({
    getDefaultProps: function () {
        return{
            width: 500,
            height: 500
        }
    },

    getInitialState: function () {
        return{
            data: all
        }
    },

    showAll: function () {
        this.setState({data : all})
    },

    filter: function () {
        this.setState({data: filtered});
    },

    render: function () {
        return(
            <div>
                <div className="selection">
                    <ul>
                        <li onClick={this.showAll}>All</li>
                        <li onClick={this.filter}>Filter</li>
                    </ul>
                </div>
                <hr/>
                <Chart width={this.props.width}
                        height={this.props.height}>
                <Bar data={this.state.data}
                            width={this.props.width}
                            heigh={this.props.height} />
                </Chart>
            </div>
        )
    }
});

export default App;

