import React, {Component} from "react";
import '../../css/app.scss';
import artist from "../../img/duk.png"
import Gallery from "../gallery"
import Skills from "../Skills"
import Description from "../description"
const userText = [
    {"id": 1, "title":"What can do?","text":"Watercolor, DigitalArt, Comic strip, and many"},
    {"id": 2, "title":"Expiriens","text":"1 year"},
    {"id": 3, "title":"Habbit","text":"Draw some shit"}
];

const description = "Рисование - это моя зона комфорта, тут я чувствую себя как рыба в воде, почти, ведь как только я начала углублятся в тему глубже уровня, " +
    "'как обвести рисунок в пайнте', я поняла что я много чего не знаю, и что художники это люди с кучей умений от рисования акварелью( что для меня является сложным но забавным занятием ), " +
    "заканчивая CG-проектами на реализацию которых уходит уйма времени, кароче Мое Уважение ";
class ArtistComponent extends Component {
    render() {
        return (
            <div>
                <div  className="main-wrapper">
                    <h1>This is Artist!</h1>
                    <div className="flex">
                        {/*<div className="inline-block hi-image">
                            <img src={artist} alt="Logo" />
                        </div>*/}
                        <div className="inline-block player-info">
                            <h4 className="info-title">I make a duk!</h4>
                            <Skills userText={userText} />
                        </div>
                    </div>
                    <Description description={description} />
                    <Gallery gallery={"artist"}/>
                </div>
            </div>
        );
    }
}

export default ArtistComponent;