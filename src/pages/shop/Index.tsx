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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla nam dolorum alias vero totam consectetur eligendi, fugiat quasi facilis labore error eos officiis dolorem dolore qui sapiente sunt eaque!
                            Illo blanditiis molestiae aut quaerat dicta eligendi, deleniti minima error nesciunt incidunt ex. Quia, necessitatibus? Fugit commodi accusantium accusamus odit error deserunt eum beatae labore enim? Consequatur fugit quos incidunt?
                            Dolorum veniam delectus eligendi mollitia accusantium dolor animi voluptatum quae minima illum, nihil consequuntur est facilis iure, dignissimos doloremque molestias soluta sed vitae enim. Accusantium libero cupiditate doloribus porro eos?
                            Accusamus quas doloribus ratione excepturi minus cupiditate, obcaecati, ducimus distinctio iste, a rem. Maiores vitae nulla harum voluptatem, blanditiis quas soluta enim provident facilis obcaecati minima id optio, pariatur quibusdam.
                            Architecto rerum illum possimus dolorem reprehenderit enim aspernatur ducimus suscipit officiis. Exercitationem, enim illo fugit dolor expedita quaerat optio impedit deserunt. Ipsa assumenda facilis laudantium reiciendis, iure optio provident minima.
                </div>
                    </div>
                    <div className="row">
                        <div className="col my-auto mx-2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla nam dolorum alias vero totam consectetur eligendi, fugiat quasi facilis labore error eos officiis dolorem dolore qui sapiente sunt eaque!
                            Illo blanditiis molestiae aut quaerat dicta eligendi, deleniti minima error nesciunt incidunt ex. Quia, necessitatibus? Fugit commodi accusantium accusamus odit error deserunt eum beatae labore enim? Consequatur fugit quos incidunt?
                            Dolorum veniam delectus eligendi mollitia accusantium dolor animi voluptatum quae minima illum, nihil consequuntur est facilis iure, dignissimos doloremque molestias soluta sed vitae enim. Accusantium libero cupiditate doloribus porro eos?
                            Accusamus quas doloribus ratione excepturi minus cupiditate, obcaecati, ducimus distinctio iste, a rem. Maiores vitae nulla harum voluptatem, blanditiis quas soluta enim provident facilis obcaecati minima id optio, pariatur quibusdam.
                            Architecto rerum illum possimus dolorem reprehenderit enim aspernatur ducimus suscipit officiis. Exercitationem, enim illo fugit dolor expedita quaerat optio impedit deserunt. Ipsa assumenda facilis laudantium reiciendis, iure optio provident minima.
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
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla nam dolorum alias vero totam consectetur eligendi, fugiat quasi facilis labore error eos officiis dolorem dolore qui sapiente sunt eaque!
                            Illo blanditiis molestiae aut quaerat dicta eligendi, deleniti minima error nesciunt incidunt ex. Quia, necessitatibus? Fugit commodi accusantium accusamus odit error deserunt eum beatae labore enim? Consequatur fugit quos incidunt?
                            Dolorum veniam delectus eligendi mollitia accusantium dolor animi voluptatum quae minima illum, nihil consequuntur est facilis iure, dignissimos doloremque molestias soluta sed vitae enim. Accusantium libero cupiditate doloribus porro eos?
                            Accusamus quas doloribus ratione excepturi minus cupiditate, obcaecati, ducimus distinctio iste, a rem. Maiores vitae nulla harum voluptatem, blanditiis quas soluta enim provident facilis obcaecati minima id optio, pariatur quibusdam.
                            Architecto rerum illum possimus dolorem reprehenderit enim aspernatur ducimus suscipit officiis. Exercitationem, enim illo fugit dolor expedita quaerat optio impedit deserunt. Ipsa assumenda facilis laudantium reiciendis, iure optio provident minima.
                </div>
                    </div>
                </Fragment>
            </div>
        );
    }
}

export default Index;