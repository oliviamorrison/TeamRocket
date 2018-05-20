import React, {Component} from 'react';

export default class Button extends Component {

  constructor(props) {
     super(props);
     this.state = {
       label: 1,
     };
   }


   componentDidMount() {
     //This is often used to make asynchronous calls like http requests
     console.log('Button component mounted!');
   }

   // shouldComponentUpdate() {
   //   return this.state.label % 2
   // }

  handleClick() {
    this.setState({label: this.state.label+1})
  }

    render(){
      var buttonStyle = {
        margin: '10px 10px 10px 0',
        width: '180px',
        height: '180px',
        background: '#3498db',
        fontFamily: 'Roboto',
        textAlign: 'center',
        color: '#FFF',
        fontSize: '50px'
      };

        return (
          <div>
          <h1> {this.props.title}</h1>
          <button
            className="btn btn-default"
            style={buttonStyle}
            onClick={() => {this.handleClick()}}>
            {this.state.label}
            </button>
          </div>
        );
    }
}
