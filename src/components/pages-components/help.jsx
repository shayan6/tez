import React, { Component } from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import Grid from "@material-ui/core/Grid";
import "../../assets/css/help-style.css";
import Hidden from "@material-ui/core/Hidden";

class Help extends Component {
  render() {
    const questionsAnsEng = [
      {
        question: "Meri profile reject hogayi hay, iski kia wajah hay?",
        answer:
          "Profile jaldi manzoor karaney ke liye yeh iqdamaat kijiye: (i) Tez Profile mein darj apna Naam, Shinakhti Card Number, Tarikh e Paidaish, Shinakhti ki Issue aur Expiry Date bilkul aapkey shinakhti card per darj maloomat sey match karnee chahyien. (ii) Dhundlee tasaweer, Photocopy Shinakhti card aur khud sey nahi lee gayee selfie qabool Nahin! Foran profile manzoor karaein aur hazaron ka loan paayein."
      },
      {
        question: "Mujhay Limit nahin mil rahi, iski kia wajah hay?",
        answer:
          "Limit naa milnay ki wajah yeh hay ke aapki profile iss baar Tez Advance service ke liye qualify nahi hosaki. Aap se request hay ke kuch dinon baad dobara apply kijiye aur uss time tak Tez App install rakhiye."
      },
      {
        question: "Mobile wallet kya hota hai?",
        answer:
          "Tez apnay sarifeen ko Advance ki raqm Mobile Wallets ke zariye faraham kerta hai. Mobile wallet ek digital service hay jiss mein phone kay zariye apne paisay secure kiye jasaktey hain bajaye iskay ke aap cash ya debit cards rakhain. Tez mein filhal SimSim aur EasyPaisa wallets hee istemal hosaktay hain. Apna mobile wallet Tez ke saath link kar ke Tez Advance hasil kar sakte hain."
      },
      {
        question: "Advance ki raqm kaise wasool ki jasakti hai?",
        answer:
          "Tez Advance apni wallet se wasool karne ke liye apko apne qareebi wallet provider agent/dukaan ke paas jaana parey ga. "
      },
      {
        question: "Advance ki raqm wapis kaisay karni hogi?",
        answer:
          "Advance ki raqm wapis adaa karne ke liye aap qareebi mobile wallet retailer ke paas jaaker apney account mein amount load karwaein, phir Tez App mein login karein aur ba asani Advance repay kijiye."
      },
      {
        question: "Tez Advance kitnay time tak kay liye liya jasakta hay?",
        answer:
          "Tez Advance ki raqm wapis adaa karnay ki muddat 1 haftay say 4 haftay tak ki hai. Aap apni marzi say muddat select kar sakte hain. Agar due date nikal jaey tou uss surat mein aap par 2.5% late payment charges laagu hongay. Apni limit increase karnay kay liye aapki koshish honi chahiye ke jald az jald advance adaa karein."
      },
      {
        question: "Mera mobile number verify nahin hua?",
        answer:
          "Tez Application mein verify honay kay liye aapki SIM ussi mobile mein honi chahiye jiss mein Tez App installed hay. Iskay ilawa rooted or jail-broken smartphones allowed nahin hain."
      },
      {
        question: "Aap sey contact kaisay kia jaey?",
        answer:
          "Tez sey raabta karne kay liye Tez Helpline 042-111-839-839 per call kijiye, 0346-822-9571 per Whatsapp kijiye ya info@tezfinancialservices.pk per email kijiye."
      }
    ];
    let icon = window.innerWidth > 900 ? "contact_support" : null; 
    return (
      <React.Fragment>
        <section className="box">
          <Grid container spacing={16}>
            <Hidden xsDown>
              <Grid item xs={2} sm={2} lg={2} style={{ padding: "19px" }}>
                <ul>
                  <li>
                    <a href="/help">
                      <p>List FAQs</p>
                    </a>
                  </li>
                  <li>
                    <a href="/help">
                      <p>List FAQs</p>
                    </a>
                  </li>
                  <li>
                    <a href="/help">
                      <p>List FAQs</p>
                    </a>
                  </li>
                  <li>
                    <a href="/help">
                      <p>List FAQs</p>
                    </a>
                  </li>
                  <li>
                    <a href="/help">
                      <p>List FAQs</p>
                    </a>
                  </li>
                </ul>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={10} lg={10} style={{ "zIndex": "100" }}>
              <Collapsible style={{ "marginTop": "-80px" }}>
                {questionsAnsEng.map((objVal,key) => (
                  <CollapsibleItem key={key} header={objVal.question} icon={icon}  >
                     {objVal.answer} 
                  </CollapsibleItem>
                ))}
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
