import React, { Component } from 'react';
import { Parallax } from 'react-materialize';
class MoreProduct extends Component {
    render() { 
        return (
            <section>
                <h1>More Product</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
                <div>
                    <Parallax imageSrc="http://materializecss.com/images/parallax1.jpg"/>
                    <div className="section white">
                        <div className="row container">
                        <h2 className="header">Parallax</h2>
                        <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
                        </div>
                    </div>
                    <Parallax imageSrc="http://materializecss.com/images/parallax2.jpg"/>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
            </section> 
        );
    }
}
 
export default MoreProduct;