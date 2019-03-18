import React, { Component } from 'react';
import { Slider, Slide } from 'react-materialize';
class Home extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1>Home</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
                <br/>
                <Slider>
                    <Slide
                        src="http://lorempixel.com/580/250/nature/1"
                        title="This is our big Tagline!">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="http://lorempixel.com/580/250/nature/2"
                        title="Left aligned Caption"
                        placement="left">
                        Here's our small slogan.
                    </Slide>
                    <Slide
                        src="http://lorempixel.com/580/250/nature/3"
                        title="Right aligned Caption"
                        placement="right">
                        Here's our small slogan.
                    </Slide>
                </Slider>
                <br/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolorum illo a nobis rerum nostrum expedita saepe ea dolore, amet delectus maiores laudantium sapiente suscipit architecto corporis? Ex, quo placeat!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat dolorum illo a nobis rerum nostrum expedita saepe ea dolore, amet delectus maiores laudantium sapiente suscipit architecto corporis? Ex, quo placeat!</p>
            </React.Fragment> 
        );
    }
}
 
export default Home;