import React, { Component, Fragment } from 'react';
import Idea from "../../images/idea.jpg";
import Geometry from "../../images/geometry.jpg";
import Meditation from "../../images/meditation.jpg";

class Index extends Component {

    state = {
        width: "20rem",
        height: "40rem",
        updated: true
    }

    setupSizes = (element:HTMLImageElement) => {
        console.log(element)
        this.setState({
            width: window.innerWidth / 2,
            height: window.innerHeight / 2
        });
    }

    componentDidUpdate(){
        if(this.state.updated){
        this.setState({
            width: window.innerWidth / 2,
            height: window.innerHeight / 2,
            updated: false
        })
    }
    }

    render() {
        return (
            <div>
                <Fragment>
                    <div className = "row">
                        <div className="col">
                            <img src={Idea} style={{"height":this.state.height, "width":this.state.width}} ref={this.setupSizes} />
                </div>
                        <div className="col my-auto mx-2">
                        Душа, помещенная в тело, подобна неограненному алмазу, и она должна быть отполирована, иначе она никогда не сможет засиять; и очевидно, что если разум отличает нас от животных, то образованность делает это отличие еще большим и помогает нам уйти от животных дальше, чем другие. 
                        <p>Даниэль Дефо</p>
                </div>
                    </div>
                    <div className="row">
                        <div className="col my-auto mx-2">
                        Если у вас есть цель, то вы знаете смысл жизни, а значит, вы ей удовлетворены. Поверьте, именно цель помогает нам в трудные минуты, делает нас крепче и воодушевляет на долгую жизнь
                </div>
                        <div className="col">
                        <img src={Geometry} style={{"height":this.state.height, "width":this.state.width}} ref={this.setupSizes} />
                </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        <img src={Meditation} style={{"height":this.state.height, "width":this.state.width}} ref={this.setupSizes} />
                </div>
                        <div className="col my-auto mx-2">
                        Помните, вся жизнь – это испытание, это тест. Чтобы достичь большого успеха, Вы должны пройти «тест на настойчивость». Но этот тест часто застаёт Вас врасплох и оказывается чем-то вроде инспекторной проверки в школе, которую ничто не предвещает. Сложная ситуация может возникнуть в любое время, причём обычно совершенно негаданно и там, где на неё совсем не рассчитываешь. Вы проходите тест на настойчивость всякий раз, когда сталкиваетесь с непредвиденной трудностью, разочарованием, задержкой, неудачей или житейским кризисом. Именно в такой ситуации Вы демонстрируете самому себе и всем, кто Вас окружает, из какого материала Вы в действительности изготовлены
                </div>
                    </div>
                </Fragment>
            </div>
        );
    }
}

export default Index;