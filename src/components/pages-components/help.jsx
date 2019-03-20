import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize';
import Grid from '@material-ui/core/Grid';
import '../../assets/css/help-style.css';
import Hidden from '@material-ui/core/Hidden';

class Help extends Component {    
    render() { 
        return (
            <React.Fragment>
                <section>
                    <Grid container spacing={12}>
                        <Hidden xsDown>
                            <Grid item xs={2} sm={2} lg={2} style={{ 'padding' : "19px" }}>
                                <ul>
                                    <li><a href="/help"><p>List FAQs</p></a></li>
                                    <li><a href="/help"><p>List FAQs</p></a></li>
                                    <li><a href="/help"><p>List FAQs</p></a></li>
                                    <li><a href="/help"><p>List FAQs</p></a></li>
                                    <li><a href="/help"><p>List FAQs</p></a></li>
                                </ul>
                            </Grid>
                        </Hidden>
                        <Grid item xs={12} sm={10} lg={10} style={{'z-index':'100'}}>
                            <Collapsible popout style={{'margin-top':'-80px'}}>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                                <CollapsibleItem header='Question ?' icon='contact_support'>
                                    Lorem ipsum dolor sit amet.
                                </CollapsibleItem>
                            </Collapsible>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <br />
                </section>
            </React.Fragment>
        );
    }
}
 
export default Help;