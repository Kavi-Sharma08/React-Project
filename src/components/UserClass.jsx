import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            count : 0,
            count1 : 1
        };
    }
    render(){
        const {name , Class} = this.props;
        return(
            <div className="User-card">
                <h3>Count : {this.state.count}</h3>
                <button onClick={()=>{
                    this.setState({
                        count : this.state.count +1,
                        count1 : this.state.count1+1,
                    }

                    );
                }}>Count</button>
                <p>{name + " class based component"}</p>
                <p>{Class}</p>
                <p>Bhagwan Parshuram Institute of Technology</p>
                <p>email - thekavisharma26@gmail.com</p>

            </div>
        )
    }
}
export default UserClass