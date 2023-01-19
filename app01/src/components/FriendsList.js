import { Component } from "react";

class FriendsList extends Component{
    constructor(props){
        super(props);
        this.state={
            friends:["Vamsy","Suseela","Indhikaa","Sagar","Saradha"]
        }
    }

    render(){
        return (
            <section>
                <h5>I have {this.state.friends.length} friends.</h5>

                <ol>
                    {this.state.friends.map( f => (<li> {f} </li>) )}
                </ol>
            </section>
        );
    }
}

export default FriendsList;