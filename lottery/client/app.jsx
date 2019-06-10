
import React from 'react';
import ReactDOM from 'react-dom';



class App extends React.Component{
    constructor(props){
    super(props);

    this.state = {};
    }
    componentDidMount(){
        console.log("component did mount");
    }
    render(){
        return(
            <div>
                <h3>App rendered!</h3>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));