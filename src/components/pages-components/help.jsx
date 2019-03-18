import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
class Help extends Component {
    render() { 
        return (
            <React.Fragment>
                <h1>Help</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus autem ullam facilis fuga officiis nisi molestiae quisquam recusandae, voluptates doloremque similique veritatis voluptate, architecto reiciendis iste dolorum error rem vitae.</p>
                <br/>
                <Collapsible popout defaultActiveKey={1}>
                    <CollapsibleItem header='First' icon='filter_drama'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Second' icon='place'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Third' icon='whatshot'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
                <br/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, quam exercitationem. Voluptate aperiam sit error nam vel reiciendis odit adipisci optio ut doloremque, perferendis quo, animi earum delectus, explicabo sed.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A assumenda quasi voluptatibus ad nobis aut, accusantium sit obcaecati beatae dolorum excepturi esse, tenetur et. Magnam aspernatur dicta deleniti quia beatae!</p>
            </React.Fragment> 
        );
    }
}
 
export default Help;