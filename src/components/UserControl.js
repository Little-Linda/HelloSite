import React from "react";
import '../css/app.scss';
import '../css/header.scss';
import ArtistComponent from "./Artist/ArtistComponent";
import ProgrammerComponent from "./BProg/ProgrammerComponent";
import artist from "../img/duk.png"
import dev from "../img/holmPaet.png"
class UserControl extends React.Component {
/*    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button ;

        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick} />;
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />;
        }
        return (
            <div>
                {button}
                <Greeting isLoggedIn={isLoggedIn} />
            </div>
        );
    }
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <ArtistComponent />;
        //return <SelectComponent />;
    }
   return <ProgrammerComponent  />;
    //return <SelectComponent  />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick} className="user-btn">
            Artist
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick} className="user-btn">
            Programmist
        </button>
    );
}*/
    constructor(props) {
        super(props);
        this.handleDevClick = this.handleDevClick.bind(this);
        this.handleArtClick = this.handleArtClick.bind(this);
        this.state = {isDevClick: false};
    }
    handleDevClick(){
        this.setState({isDevClick: true})
    }
    handleArtClick(){
        this.setState({isDevClick: false})
    }
    render() {
        const isDevClick = this.state.isDevClick;
        let button1;
        let button2;
        if(isDevClick){
            button1 = <DevButton onClick={this.handleArtClick} value={isDevClick }/>;
            button2 = <ArtButton onClick={this.handleDevClick} value={isDevClick } />;

        }else {
            button1 = <DevButton onClick={this.handleArtClick}  value={isDevClick }/>;
            button2 = <ArtButton onClick={this.handleDevClick}  value={isDevClick }/>;

        }
        return (
            <div className="wrapper">
                <div className="grid">
                    {button1}
                    {button2}
                </div>
                <Greeting isDevClick={isDevClick} />
            </div>
        );
    }
}
function Greeting(props) {
    const isDevClick = props.isDevClick;
    if (isDevClick) {
        return <ArtistComponent />;
    }
    return <ProgrammerComponent  />;
}

function DevButton(props) {
    console.log(props.value);
    return (
        <div className={"char-wrapper" + (props.value === false ? " active" : "")} onClick={props.onClick}>
            <h1>Developer-san</h1>
            <img src={dev} alt=""/>
        </div>
    );
}

function ArtButton(props) {
    return (
        <div className={"char-wrapper" + (props.value === false ? " " : " active")}  onClick={props.onClick} >
            <h1>Artist-chan</h1>
            <img src={artist} alt="" />
        </div>
    );
}
export default UserControl
