import React from 'react'
import PropTypes from 'prop-types'
import {Card, WhiteSpace,WingBlank} from 'antd-mobile'
import {withRouter} from 'react-router-dom'
@withRouter
class UserCard extends React.Component{
  static propTypes = {
    userlist:PropTypes.array.isRequired
  }
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(v){
    this.props.history.push(`/chat/${v._id}`)
  }
  render(){
    const Header = Card.Header
    const Body = Card.Body
    return (

      <div id='page'>
        <WhiteSpace></WhiteSpace>
        <WingBlank>
          {this.props.userlist.map(v=>(
          v.avatar ?( 
          <Card 
          key={v._id}
          onClick={()=>this.handleClick(v)}
          >
              <Header title={v.user}
                      thumb={require(`../img/${v.avatar}.jpg`)}
                      extra={<span>{v.title}</span>}
              ></Header>
              <Body>
                {v.desc.split('\n').map(v=>(
                  <div key={v}>{v}</div>
                ))}
                {v.type=='boss'? <div>{v.money}</div>:null}
              </Body> 
            </Card>):null
          ))}
        </WingBlank>
      </div>
    )
  }
}
export default UserCard