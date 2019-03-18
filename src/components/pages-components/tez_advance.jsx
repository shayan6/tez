import React, { Component } from 'react';
import { Carousel } from 'react-materialize';
class TezAdvance extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1>Tez Advance</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
                <br/>
                <Carousel images={[
                'https://lorempixel.com/250/250/nature/1',
                'https://lorempixel.com/250/250/nature/2',
                'https://lorempixel.com/250/250/nature/3',
                'https://lorempixel.com/250/250/nature/4',
                'https://lorempixel.com/250/250/nature/5'
                ]} />
                <br/>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugit placeat nobis saepe sed, doloremque tenetur amet voluptatem quas quos hic non omnis excepturi voluptas impedit animi esse nulla dolorem?</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita fugit placeat nobis saepe sed, doloremque tenetur amet voluptatem quas quos hic non omnis excepturi voluptas impedit animi esse nulla dolorem?</p>
            </React.Fragment> 
        );
    }
}
 
export default TezAdvance;