import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    render() {
       return this.state.isLoggedIn && <div>Welcome Pranav</div>
    // return(
    // this.state.isLoggedIn?
    // <div>Welcome Pranav</div> :
    // <div>Welcome Guest</div>
    // )

        // let message
        // if(this.state.isLoggedIn){
        //     message = <div>Welcome Pranav</div>
        // }else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>
        // if(this.state.isLoggedIn){
        //     return(
        //     <div>
        //         Welcome Pranav
        //     </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }
    // return (
    //    <div>
    //   <div>Welcome Pranav </div>
    //   <div>Welcome Guest</div>
    //   </div>
     
    // )
  }
}

export default UserGreeting