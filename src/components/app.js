import React from "react";
import Header from "./header.js"
import '../css/app.scss';
import UserControl from "./UserControl";

class App extends React.Component{
    render() {
        return (
            <div className="wrapper">
                <Header/>
                <UserControl/>
            </div>
        );
    }
}
export default App;