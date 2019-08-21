import React, {Component} from "react";
import '../../css/app.scss';
import program from "../../img/holmPaet.png"
import Gallery from "../gallery"
import Skills from "../Skills"
import Description from "../description"
const userText = [
    {"id": 1, "title":"What can do?","text":"Css/SCSS, JS, React.js, Angular, Veu.js"},
    {"id": 2, "title":"Expiriens","text":"six years!"},
    {"id": 3, "title":"Habbit","text":"Sleep"}
];
const description = "Приветствую Тебя на этом сайте-портфолио-первыйБлинКомом, на самом деле я еще не программист, но очень хочу им стать, так хочу что пытаюсь это сделать уже " +
    "больше 10лет, зачем мне это? просто хочется, Можно было бы бросить попытки в первый же раз когда услышала от своего сенсея фразу 'Программирование - это не твое', " +
    "но в тот омент все что пришло в голову это послать его куда подальше, да, возможно я не так быстро обучаюсь как остальные, но самый тупой поступок с моей стороны был бы бросить пытаться";

class ProgrammerComponent extends Component {
    render() {
        return (
            <div>
                <div  className="main-wrapper">

                    <h1>This is Programmer!</h1>
                    <div className="flex">
                    {/*    <div className="inline-block hi-image">
                            <img src={program} alt="Logo" />
                        </div>*/}
                        <div className="inline-block player-info">
                            <h4 className="info-title">I make a duk!</h4>
                            <Skills userText={userText}/>
                        </div>
                    </div>
                    <Description description={description} />
                   <Gallery gallery={"programmer"}/>
                </div>
            </div>
        );
    }
}

export default ProgrammerComponent