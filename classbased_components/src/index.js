import React from 'react';
import ReactDOM from 'react-dom';
import Seasondisplay from'./SeasonDisplay'
import Spinner from'./spinner'
class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT
    //     //TO THIS.STATE
    //     this.state={lat:null,errorMessage:''};
    // }
        state={lat:null,errorMessage:''};

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            //we called setState
            position=>this.setState({lat:position.coords.latitude})  ,
            err=>this.setState({errorMessage:err.message})
        );
    }
    // componentDidMount(){
    //     console.log('My component was rendered to the screen');
    // }
    // componentDidUpdate(){
    //     console.log('My component was just updated it rendered!');
    // }
   //React says we have to to define render!!
   renderContent(){
    if(this.state.errorMessage&&!this.state.lat){
        return <div>
            Error:{this.state.errorMessage}
        </div>;
    }
    if(!this.state.errorMessage&&this.state.lat){
     //    return <div>Latitude:{this.state.lat}</div>;
     return <Seasondisplay lat={this.state.lat}/>
    }
    return<Spinner message="Please accept location request"/>;
 }
   
    render(){
      return(
          <div className="border red">
              {this.renderContent()}
          </div>
      );
    
}
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)