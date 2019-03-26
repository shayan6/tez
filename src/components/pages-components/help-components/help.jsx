import React, { Component } from "react";
import "../../../assets/css/help-style.css";
import { Collapsible, CollapsibleItem } from "react-materialize";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

class Help extends Component {
  componentWillMount(){
    this.setState({
      FAQs: generalQAnsEng
    });
  }
  
  changeFAQs = () => {
    // this.setState({
    //   FAQs: this.termAndConQAnsEnd
    // });
  };
  
  render() {
    let icon = window.innerWidth > 900 ? "contact_support" : null;
    return (
      <React.Fragment>
        <section className="box">
          <Grid container spacing={16}>
            <Hidden xsDown>
              <Grid item xs={2} sm={3} lg={3} style={{ padding: "19px" }}>
                <ul className="sideLink">
                  <li>
                    <a
                      className="active"
                      href="#top"
                      onClick={this.changeFAQs({ termAndConQAnsEnd })}
                    >
                      <p>General</p>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <p>Terms & Conditions</p>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <p>Mobile Wallet</p>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <p>Transaction Details</p>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <p>Verification</p>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <p>Permissions</p>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <p>Tez Advance</p>
                    </a>
                  </li>
                  <li>
                    <a href="#top">
                      <p>Financial Charges</p>
                    </a>
                  </li>
                </ul>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={9} lg={9} style={{ zIndex: "100" }}>
              <Collapsible style={{ marginTop: "-80px" }}>
                {generalQAnsEng.map((objVal, key) => (
                  <CollapsibleItem
                    key={key}
                    header={<span> {objVal.question} </span>}
                    icon={icon}
                  >
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

const generalQAnsEng = [
  {
    question: "What is Tez?",
    answer:
      "Tez Financial Services is a digital platform offering a portfolio of financial services from lending to short term investments. Currently Tez is giving instant cash credit to its users who do not have access to the formal banking sector. All over Pakistan, Tez is helping create a financial inclusion eco-system. To download Tez App and enjoy frictionless access to financial services please click on this link: http://cli.re/LWwopk."
  },
  {
    question: "Is the service available on the web?",
    answer:
      "At the moment our service is only available on Android OS supporting smartphones and not on any website. Please download Tez App and enjoy frictionless access to finance by clicking on this link: http://cli.re/LWwopk."
  },
  {
    question: "How do I download Tez App?",
    answer:
      "Kindly please click on the following link to download our app from Google Play Store: http://cli.re/LWwopk. After downloading the app you can signup via your CNIC or Facebook ID. After signing up you can quickly apply for TezAdvance and get it within a few minutes (provided that all your submitted details are correct and the CNIC is valid)."
  },
  {
    question: "Which Operating System does it support?",
    answer:
      "Tez supports Android OS at the moment, but we are trying to make Tez available on other various platforms to give the best service to our customers. You can click on the following link to download our app from Google Play Store: http://cli.re/LWwopk."
  },
  {
    question: "How do I sign up for Tez App/ Services?",
    answer:
      "After downloading our app from from Google Play Store: http://cli.re/LWwopk you will have two options to signup. Either you can use your CNIC number or Facebook ID to signup after which you will be prompted to enter further information for profile verification. Please make sure to enter complete and correct information as asked so that your profile is verified quickly."
  },
  {
    question: "What is a PIN?",
    answer:
      "A PIN number is a 4 digit password which you set during the signup process to keep your account secure. This PIN should be kept secret and should not be known by anyone except you. Tez will not be responsible for any loss if you share your PIN number with other people.  Whenever you open your application, the system will ask you to enter your PIN so that any intruder will be unable to access your account."
  },
  {
    question: "What happens if I forgot my Pin?",
    answer:
      "In case you forget your PIN number then you will have to verify your identity by callling our customer support team and request for a PIN reset. A temporary PIN will be shared to you via SMS so that you can log in th app. After login you will have to setup a new permanent PIN as the expiry time of the temporary PIN is only 10 minutes.  Within the app you also have the option to update your PIN by going to My Account and choose the Change PIN option."
  },
  {
    question: "Can I change my selfie?",
    answer:
      "Yes you can update your selfie with CNIC during the Limit application process. Do ensure that pictures are clear and sharp for quick approval. Selfie must be taken by the applicant only and must show him/her holding the CNIC in hands."
  },
  {
    question: "My account's drop down menu is not working in the app",
    answer:
      "Please Whatsapp us the screenshotu of the error at 0346-822-957 so that we can look into the issue."
  },
  {
    question: "Can I have multiple login options?",
    answer: "At the moment you can only login via your Pin Code."
  },
  {
    question: "Why does Tez require CNIC details?",
    answer:
      "We require your CNIC details for verification purposes to ensure that your ID is not misused by anyone."
  },
  {
    question: "What is a dashboard?",
    answer:
      "Your Tez App has a dashboard that contains all the tools and information regarding your trannsactions, account details, FAQs etc."
  },
  {
    question: "What is Tez Bima?",
    answer:
      "Tez Bima is a part of Tez Financial Services which offers Life & Health insurance. This service is in currently under development and will be launched soon."
  },
  {
    question: "What is Tez Committee?",
    answer:
      "Tez Committee allows individuals from across Pakistan to pool funds digitally and benefit from the usual committee like services. This service is currently under development and will be launched soon."
  },
  {
    question: "What is Tez Sarmaya?",
    answer:
      "Tez Sarmaya caters to the medium-to-longer-term investment needs by providing investors a digital investment avenue allowing smart and tailored allocation of funds based on varying investment horizons, risk appetites, and financial conditions."
  },
  {
    question: "Can I use same mobile numbers for two different accounts?",
    answer:
      "Only one account per mobile number is allowed due to security purposes."
  },
  {
    question: "Account Suspended, What to Do?",
    answer:
      "To reactivate your account please call our helpline at 0423-832-9614."
  },
  {
    question: "Why are you not accepting my profile?",
    answer:
      "Kindly please take clear and sharp pictures of your CNIC front and back along with a selfie of you holding the CNIC. Blurred or cropped pictures will be rejected as well expired and photocopied CNICs. Do ensure that you take the selfie by your self. Also make sure that your submitted information matches CNIC details."
  },
  {
    question: "Is Tez a government registered company?",
    answer:
      "Tez is a Non-Bank Microfinance Company (NBMFC) licensed by the Securities & Exchange Commission of Pakistan (SECP). Having partnered with some of the leading financial institutions including UBL, Telenor Bank (Easypaisa), FINCA Bank, EFU Life, and Jubilee General is a testament of our services."
  },
  {
    question: "What is your Whatsapp number?",
    answer:
      "For any queries regarding our services please drop a message on our Whatsapp number at 0346-822-9571."
  },
  {
    question: "How can I change my country in Google Playstore account?",
    answer:
      "Steps for changing your country to Pakistan on Google Playstore are as follows: 1) Sign into your Google Payments account at payments.google.com and click the Settings icon in the top corner. 2) Click Edit next to the 'Home Address' listed and update the address (please note this is different from the 'Address Book' which holds shipping addresses). 3) Open the Play Store and navigate to any item available for download. 4) Click to begin a download until you reach the 'Accept and buy' screen (no need to complete the purchase) Close the Play Store, force stop and then clear data for the Google Play Store application (Settings > Apps > Google Play Store > Force Stop then Clear Data) or clear your browser cache. 5) Re-open the Play Store. You should now see the Play Store that matches your default payment method’s billing country."
  },
  {
    question: "Referral Code?",
    answer:
      "Please do not enter referral code/ Hawala Number as it is not necessary. Kindly please skip this option."
  },
  {
    question: "Why should I trust you with my personal information?",
    answer:
      "Tez is a Non-Bank Microfinance Company (NBMFC) licensed by the Securities & Exchange Commission of Pakistan (SECP). We are partnered with UBL, Telenor Bank (Easypaisa), FINCA Bank, EFU Life, and Jubilee General. We only take customer details for verification purposes just like a bank or any financial entity would do to authenticate their consumers."
  },
  {
    question:
      "My device is PTA approved but still showing rooted, fake app, why?",
    answer:
      "Any phone that has their original software altered is considered as a jail broken or rooted device. Since Tez is a licensed financial institution that is why for customer security reasons our app does not work on such devices. We apologize for the inconvenience."
  }
];

const termAndConQAnsEnd = [
  { question: "Mjhy Zyada Advance Ki Zrorat Hai", answer: "Okkayy" }
];

export default Help;
