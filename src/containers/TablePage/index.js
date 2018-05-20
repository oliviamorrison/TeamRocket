import React, {Component} from 'react';
import {connect} from 'react-redux';
//import FormWrapper from'./FormWrapper'
import * as UserActions from '../../actions/UserActions.js'

//I have left an exercise in here!

 class TablePage extends Component {

   componentDidMount () {
     this.props.getData()
   }

    render() {

        return (
          <div>
            <h1>Mock json data</h1>
            <div className="tbl-header">
            <table cellPadding='0' cellSpacing='0' border='0'>
            <thead>
              <tr>
                <td> id</td>
                <td> title</td>
                <td> body</td>
              </tr>
              </thead>
              </table>
              </div>
              <div className="tbl-content">
              <table>
                <tbody>
              {
                this.props.jsonMockData.data.map((el) => {
                  return ( <tr key={el.id}>
                    <td> {el.id}</td>
                    <td> {el.title}</td>
                    <td> {el.body}</td>
                  </tr>
                  )
                })
              }
            </tbody>
            </table>
            </div>
          </div>
        );
    }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getData: () => dispatch(UserActions.getData())
  }
}

function mapStateToProps(state) {
  return {
    jsonMockData: state.jsonMockData
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
