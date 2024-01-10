import React,{Component} from "react";

class StateInClassComp extends Component{
    constructor(props){
        super(props)
        this.name= "Anandrao";

        this.state={
            userName :'Ganesh'
        }
        this.state={
            number:10,
            sName:'Rupesh',
            flag:true,
            arrayValue:[1,2,3,4,8,9],
            person:{
                name:"Nikita",
                add:'Pune'
            }
        }
    }
    userChange(){
        // user change function called
        console.log("Button clicked");
        this.name="Nikita";
        console.log(this.name);
    }

    changeUserName(){
        //alert("Inside changeUserName");
        this.setState({userName:'Admin'})
    }
    changeProp(){
        this.setState({number:25});
        this.setState({flag:false});
        this.setState({arrayVal:[9,8,7,5,6,4]});
        this.setState({obj:{name:'Andy',add:'Satara'}});
    }
    
    render(){
        
        return(
            
            <>
                <h1>State in class component</h1>
                <h4>Name is: { this.name }</h4>
                <button onClick={this.userChange.bind(this)}>Change User</button>


                <h4>UserName Is: {this.state.userName} </h4>
                <button onClick={this.changeUserName.bind(this)}>User Name Change</button>

            <div>
                <p>Number is:{this.state.number}</p>
                <button type="button" class="btn btn-warning" onClick={this.changeProp.bind(this) }>Change Number</button>
                
                <p>Name is:{this.state.sName}</p>

                
                <p>Number is:{this.state.flag?"True":"Flase"}</p>
                <button type="button" class="btn btn-warning" onClick={this.changeProp.bind(this) }>Change Status</button>
                
                <p>ArrayValue is:{this.state.arrayValue.join(",")}</p>
                {/* <button type="button" class="btn btn-warning" onClick={(this.changeProp.bind(this)).join(',') }>Update Array</button> */}
                
                <p>Person:{JSON.stringify(this.state.person)}</p>
                {/* <button type="button" class="btn btn-warning" onClick={JSON.stringify(this.changeProp.bind(this)) }>Update Person</button> */}
            </div>
            </>
        )
    }
}

export default StateInClassComp;