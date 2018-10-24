import React from 'react'
import {connect} from 'react-redux'
import {addGUN, removeGUN, addGunAsync} from './index.redux'

class App extends React.Component{
  render(){
    const store = this.props.store
    const addGUN = this.props.addGUN
    const addGunAsync = this.props.addGunAsync
    const num = this.props.num
   return (
     <div>
        <h1>现在有机枪{num}把</h1>
        <button onClick={addGUN}>申请武器</button>
        <button onClick={addGunAsync}>过两天给</button>
     </div>
   )
        
  }
}
const mapStatetoProps=(state)=>{
  return {num:state}
}
const actionCreators={addGUN, removeGUN, addGunAsync}
App = connect(mapStatetoProps,actionCreators)(App)
export default App
