import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { upperCase, lowerCase, revertCase, titleCase, sentenceCase } from './actions'


class App extends React.Component {
    render() {
      let converter1 = this.props.converter;
      console.log({converter1});
      return (
        <div className="App">
          <h1>Hello, React! counter is {converter1}</h1>
          <input type="text" id="inputString1"/>
          <input type="text" id="inputString2" value={converter1} onChange={()=>{}}/>
          <button onClick={() => {
              let buffer = document.getElementById("inputString1").value;
              this.props.upperCase(buffer);
              }}> upper case</button>
          <button onClick={() => {
              let buffer = document.getElementById("inputString1").value;
              this.props.lowerCase(buffer);
              }}> lower case</button>
          <button onClick={() => {
              let buffer = document.getElementById("inputString1").value;
              this.props.revertCase(buffer);
              }}> Revert case</button>
          <button onClick={() => {
              let buffer = document.getElementById("inputString1").value;
              this.props.titleCase(buffer);
              }}> Title case</button>
          <button onClick={() => {
              let buffer = document.getElementById("inputString1").value;
              this.props.sentenceCase(buffer);
              }}> Sentence case</button>
        </div>
      )
    }
  }


  // After this this.props.counter will be available for use
  const mapStateToProps = (state) => {
      return {
          converter : state.converter
      }
  }

  // After this this.props.increment will be available for use
  // All your action creators will become a part of your props that can be used to dispatch the actions
  const mapDispatchToProps = (dispatch) => {
      let actionDispatchers = bindActionCreators({upperCase, lowerCase, revertCase, titleCase, sentenceCase}, dispatch);
      return actionDispatchers;
  }

  // It connects the react with the redux component
  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(App);