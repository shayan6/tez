import React, { Component } from "react";
import "../../../assets/css/advance-style.css";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import HowToAdvance from "./sections/how-to-advence";

function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

class TezAdvance extends Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { value } = this.state;
    const contentTab = [
      {
        value: 0,
        heading: "INSTALL",
        content:
          "Playstore mein Application ke page per Install ka Button press kijiye"
      },
      {
        value: 1,
        heading: "DOWNLOAD",
        content:
          "Play Store mein jaaiye aur search bar mein Tez Financial Services type karkey search kijiye"
      },
      {
        value: 2,
        heading: "SIGNUP",
        content:
          "Download honay per application open karein aur thori see tafseelat deykar signup kijiye"
      },
      {
        value: 3,
        heading: "GER VERIFIED",
        content:
          "Application ke andar apnay CNIC ki tasdeeq karwaein. Yaqeeni banayein keh aapki dee gayi tasaweer dundhlee na hon aur sirf original CNIC ki tasaweer dijiye. Photocopy aur expired CNIC ki tasaweer qabil e qabool nahin"
      },
      {
        value: 4,
        heading: "Get a Limit",
        content:
          "Tasdeeq ka marhala poora honay per Limit haasil karein. Tez ka system aapki dee gayi maloomat aur deegar data ko istemal karte huay apako Rs.1,000 sey Rs.5,000 tak kee limit assign karta hay"
      },
      {
        value: 5,
        heading: "Choose Wallet",
        content:
          "Tez apnay sarifeen ko mobile wallets ke zariye raqm faraham kerta hay. Easypaisa, SimSim aur UBL Omni wallets mein Tez Advance ki raqm deposit hotee hay. Wallet application download karein iss link sey bit.ly/walletspk aur register honay kay baad Tez Application mein usski tafseelat darj karein"
      },
      {
        value: 6,
        heading: "Get Advance",
        content: "Rs.1,000 sey Rs.5,000 tak ka Tez Advance fori haasil karein"
      },
      {
        value: 7,
        heading: "Repay Advance",
        content:
          "Application mein jaa ker mein page per Repay Advance per press kijiye aur wajib ul adaa raqm adaa karein aur limit barhaney ka chance haasil karien"
      }
    ];

    return (
      <section>
        <div className="box">
          <h4 className="colorBlack" style={{ textAlign: "center" }}>
            TEZ ADVANCE
          </h4>
          <br />
          <Paper square>
            <Tabs
              value={value}
              onChange={this.handleChange}
              variant="scrollable"
              scrollButtons="on"
            >
              <Tab label="Install" />
              <Tab label="Download" />
              <Tab label="Signup" />
              <Tab label="Get Verified" />
              <Tab label="Get a Limit" />
              <Tab label="Choose Wallet" />
              <Tab label="Get Advance" />
              <Tab label="Repay Advance" />
            </Tabs>
          </Paper>
          {contentTab.map(
              (el, key) =>
                value === el.value && (
                  <TabContainer key={key}>
                    <HowToAdvance heading={el.heading} content={el.content} />
                  </TabContainer>
                )
            )}
        </div>
      </section>
    );
  }
}

export default TezAdvance;
