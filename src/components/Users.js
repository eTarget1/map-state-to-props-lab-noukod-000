import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  render() {
    let users = this.props.users.map((user, index) => <li key={index}>{user.username}</li>);

    return (
      <div>
        {this.props.userCount}
        <ul>
          {/* Users!
          {this.props.users.map((user,i) => {
            return (
              <li key={i}>
                  {user.username}
              </li>
            ) 
          })}
          {this.props.userCount} */}

          {users} 
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) => {
  // debugger;
  return { users: state.users,
  userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
