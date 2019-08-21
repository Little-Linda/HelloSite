import React from "react"

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            date: new Date()
        }; //начаьное состояние
    }
    componentDidMount(){ // как только компонент отрендерин запускается метод жизненого цыкла , в нем браузер говорит каждую секунду вызывать функцию tick()
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    };
    componentWillUnmount(){
        clearInterval(this.timerID);
    };
    tick(){//тут меняем this.state на текущее время, реакт реагирует на это и снова запускает рендер
        this.setState({
            date: new Date()
        });
    }
    render(){
        return (
            <div className={"watchStyles"}>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Clock;