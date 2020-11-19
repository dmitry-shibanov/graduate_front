import React, { Component, Fragment } from 'react';
import axios from "../../axios";
import Loader from '../../components/loader/Loader';
import IProduct from '../../models/IProduct';
import ItemProduct from '../../components/Items/ThemeCourse/ItemProduct';


class ListCourses extends Component<any, any > {

    constructor(props: any){
        super(props);
    }
    
    state = {
        courses: [],
        loading: true,
        items: []

    }

    async componentDidMount() {
        let response = await axios.get('/courses');

        const items = response.data.courses.map((item: any)=>{
            console.log(item)
            return <ItemProduct id={item.id} title={item.title} image={'https://miro.medium.com/max/1400/0*EU_N6DqGpsQ3vRVq.jpg'} />
        });
        
        this.setState({
            courses: response.data.courses,
            loading: false,
            items: items
        });
    }

    render(){
       return (<Fragment>
        <div className="container-fluid">
          <div className="grid" id="main">
            {this.state.loading && (
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <Loader />
              </div>
            )}
           {this.state.loading || this.state.items}
          </div>
        </div>
      </Fragment>
        );
    }
}

export default ListCourses;