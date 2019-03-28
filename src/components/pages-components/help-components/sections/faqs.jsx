import React from "react";
import { Collapsible, CollapsibleItem } from "react-materialize";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

function Faqs(props) {
  let icon = window.innerWidth > 900 ? "contact_support" : null;

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
    {
      question: "What are the Terms & Conditions?",
      answer:
        "Terms & Conditions are regulations and requirements that are mentioned on our app and on our website. Within the app you can find them by pressing My Account and then pressing on the  Terms & Conditions option. Please note that you will have to accept the stipulated Terms and Conditions in order to use our services."
    }
  ];

  const mobileWalletQAnsEnd = [
    {
      question: "What is a wallet?",
      answer:
        "Tez lends money to its users via mobile wallets which are a digital way of securing money in your smartphones. You can use them for for transactions instead of cash or plastic cards. Currently EasyPaisa, SIMSIM and UBL Omni wallets are available for use on Tez App. You can link your Tez Account with either of these wallets to recieve Tez Advance."
    },
    {
      question: "How do I install the wallet?",
      answer:
        "In order to istall and open a wallet account, you will need to download any mobile wallet application that Tez supports ( Easypaisa, SimSim, Omni) from Google Play Store and follow their given instructions to open your Mobile Wallet account which you can then link with your Tez Profile to enjoy our services."
    },
    {
      question: "What if I already have a Mobile Wallet?",
      answer:
        "If you already have a Mobile Wallet available then you can link your existing account with Tez by going on the application menu, pressing My Wallets option and choosing the Add New Wallet option. After that please enter the required information to connect your wallet to your Tez Profile."
    },
    {
      question: "What is a Mobile Wallet Number?",
      answer:
        "Your Mobile Wallet Number is provided by your Mobile Wallet service. Usually your registered phone number is your mobile wallet number. If that's not the case then you may have some other number provided by your wallet provider."
    },
    {
      question:
        "Can I do multiple transactions from multiple mobile wallet providers?",
      answer:
        "You can use multiple wallets to repay Tez Advance. Do ensure that all your mobile wallets are linked to your Tez profile and supported by Tez. Please note that only one Wallet per Wallet Provider is allowed on Tez, for example, there cannot be to Easypaisa accounts on Tez."
    },
    {
      question:
        "What if I do not get a reply with respect to mobile wallet verification or my mobile account is in inactive state?",
      answer:
        "If you cannot get verification confirmation then please ensure that your phone is getting proper signals, your mobile wallet account is active and linked to your registered mobile number by calling the relevant wallet service. If the issue is not resolved then please call our helpline at 042-111-839-839 to register your complain."
    },
    {
      question: "What is a wallet?",
      answer:
        "Tez lends money to its users via mobile wallets which are a digital way of securing money in your smartphones. You can use them for for transactions instead of cash or plastic cards. Currently EasyPaisa, SIMSIM and UBL Omni wallets are available for use on Tez App. You can link your Tez Account with either of these wallets to recieve Tez Advance."
    }
  ];

  const transactionQAnsEnd = [
    {
      question: "Can I get a print out of disbursement receipt?",
      answer:
        "The receipt/ transaction detail provided on our app is considered as your receipt. If you want to keep a record of it you can always check the transaction details within the application."
    },
    {
      question: "How many transactions can I see in transactions summary?",
      answer:
        "All the transactions that were done previously can be viewed in the My Transactions section of the app."
    },
    {
      question: "Can we take multiple loans in a single period?",
      answer:
        "If you want more than one loan/advance in a single period then it won't be allowed unless the previous loan/advance is repaid. Once the repayment is done, a new loan can be requested."
    }
  ];

  const documentationQAnsEnd = [
    {
      question: "Can I update my CNIC number on Tez App ?",
      answer:
        "Yes you can edit your CNIC number and all other relevant details by accessing your profile in Tez App BEFORE PROFILE APPROVAL. After profile approval you can only edit your email and phone number."
    },
    {
      question: "Can I change my CNIC pictures?",
      answer:
        "Yes you can update your CNIC pictures while applying for Limit. After taking pictures do check if they appear clear and sharp, otherwise they will be rejected and you will have to upload them again. Please avoid taking pictures of photocopied or expired CNICs."
    },
    {
      question: "Can I change my phone number for login from the same details?",
      answer:
        "Yes you can change it by going to Menu> My Account> My Profile and edit/update your phone number. After due verification your phone number will be updated. Please note that the SIM of the phone number which is registered in Tez Application must be present in the same phone in you have installed the application."
    },
    {
      question: "I want to change my CNIC picture in the profile section",
      answer:
        "Once you have submitted the CNIC pictures, they can only be updated if your verification is rejected."
    },
    {
      question: "How do I enter CNIC picture?",
      answer:
        "You will be automatically prompted to take front and back pictures of your CNIC along with your selfie holding the CNIC. Do ensure that the CNIC picture is original, active & non photocopied and the pictures are clear otherwise your application will be rejected."
    }
  ];

  const varificationQAnsEnd = [
    {
      question: "Why is my CNIC not verified?",
      answer:
        "Your CNIC might not be verified if the details mentioned on it are different than the one you have entered in the app. Most common issues are: -CNIC number is incorrectly entered -Expired CNIC - Wrong Date of Birth entered. - Wrong CNIC Expiry Date entered. - Blurry pictures of CNIC. - Picture of photocopied CNIC provided.- No selfie of the user with CNIC. In order to get your profile verified quickly do make sure to enter your CNIC details carefully and never use pictures of photocopied CNICs."
    }
  ];

  const permissionQAnsEnd = [
    {
      question: "Do I have to provide any permissions within the app?",
      answer:
        "In order to provide you its full range of services in a seamless manner, Tez asks for certain permissions from your mobile phone. Further, these permissions enable us to secure & verify your profile so that we can give you the best services and secure your privacy."
    },
    {
      question: "What happens if we do not give permissions?",
      answer:
        "Unfortunately Tez app will not be able to function further if the required permissions are not granted. "
    }
  ];

  const tezAdvanceQAnsEnd = [
    {
      question: "What is Tez Advance?",
      answer:
        "Tez Advance provides its customers the ability to borrow cash upto Rs.5,000 instantly, within 15 minutes, without any credit history & collateral. To avail Tez Advance, the customer must fill in an application within the Tez App, select an Advance amount, choose an Advance tenure and agree to the terms and conditions of the Advance. Please click on the following link to download our app from Google Play Store: http://cli.re/LWwopk."
    },
    {
      question: "How do I register for Tez Advance?",
      answer:
        "You can get a Tez Advance with the following simple steps: 1. Download the Tez Financial Services app on Google Playstore 2. Sign Up with Tez 3. Link your mobile wallet with Tez 4. Provide your details.   And the cash will be instantly deposited into your mobile wallet!. To avail our services again, do not forget to repay on time."
    },
    {
      question: "What is the maximum amount of Tez Advance?",
      answer:
        "At Tez our users are assigned Limits from which they can take an advance. The maximum limit is PKR5,000 and the minimum is PKR1,000. The limits assigned vary with each customer as our automated system takes that decision based on user provided information."
    },
    {
      question: "How do I set the tenure of repayment?",
      answer:
        "After you have been assigned a limit, you will taken to Tez Advance application screen where  you can select the desired tenure for repayment by clicking on (+)/ (-) buttons on that screen given the Limit amount. All associated processing charges will also be shown to you for further clarity."
    },
    {
      question: "What are beneficiary details?",
      answer:
        "These are the details of your Bima insurance policy recipients which is offered to all users on taking Tez Advance."
    },
    {
      question: "Do I have the option to change the mobile handset?",
      answer:
        "You can login from any handset to Tez App but do ensure that the handset is PTA approved and it should have the SIM of the same phone number which was entered at the time of signup. Also ensure that if you have taken an advance on the previous phone then do ensure that is paid before changing the handset."
    },
    {
      question:
        "When will Limit increase?/ My limit has not increased, when will it increase?/ Why are you not increasing limits?",
      answer:
        "Tez's automated system determines the limit assigned to each customer according to his/her repayment behavior. It usually takes multiple successfull & timely repayments to graduate to a higher Limit."
    },
    {
      question: "How do I withdraw cash from my wallet?",
      answer:
        "You can go to your nearest mobile wallet provider agent and request cash out from your wallet account."
    },
    {
      question: "How can I repay my Tez Advance?",
      answer:
        "You can repay your Tez Advance through your mobile wallet account. Please visit your nearest mobile wallet linked retailer to deposit the amount in your mobile wallet, login to your Tez App and pay your Tez Advance."
    },
    {
      question: "In how much time do I have to pay Tez Advance?",
      answer:
        "The tenure of Tez Advance ranges from 1 to 4 weeks. This is the time within which you will to repay your advance. After your due date has passed you will be liable to pay 2.5% late payment charges. Always make sure to pay your Tez Advance on time to increase the chances of your profile being assigned a higher limit."
    },
    {
      question: "How can I claim my medical insurance?",
      answer:
        "Medical coverage policy can be claimed on hospitalization expenses upto PKR 5,000 only which are incurred during the tenure of your Tez Advance. OPD expenses are not covered in this policy. To claim the amount you will have to call our helpline at 042-111-839-839 where, after verification, you will be guided about the document submission process."
    },
    {
      question: "Why do you charge fees on every cash advance?",
      answer:
        "Normally a bank will take 30-35 days to provide you a loan after many verifications and putting you through cumbersome document submission procedures. Meanwhile Tez Financial provides instant cash advance services to its by taking minimum documentation and no collateral and it does it all within minutes! Our esteemed customers also get medical insurance (upto PKR 5,000) and Bima coverage with every loan, so our charges reflect these services which are meant for your convenience."
    },
    {
      question: "Why is my limit not assigned?",
      answer:
        "If you are getting a Limit Not Assigned message then it means that you could not qualify for our instant advance services this time. Our software assesses your profile based on phone, app usage and customer provided data. However, you can always re-apply after sometime while keeping Tez application installed."
    }
  ];

  const financeQAnsEnd = [
    {
      question: "What are the charges?",
      answer:
        "There are fixed one-time charges on Tez Advance which are uniquely calculated for each customer and range from 10-20%."
    },
    {
      question: "What is the processing fee?",
      answer:
        "For each customer taking Tez Advance, we are charging flat PKR 20 for processing each disbursement."
    },
    {
      question: "What will be the charges for late Repayment?",
      answer:
        "It is important that you pay the advance back on time. Failure to do so will result in the following penalities:  1)2.5% late payment charges.  2)Your limit won't increase.  3)You might be blacklisted from using Tez App.  4) If after multiple reminders you still fail to repay then your details will be reported to the Credit Bureau & Legal action will be taken against you."
    }
  ];

  return (
    <section className="box">
      <Grid container spacing={16}>
        <Hidden xsDown>
          <Grid item xs={2} sm={3} lg={3} style={{ padding: "19px" }}>
            <br />
            <ul className="sideLink">
              <li className="contentHead">
                Table Of Contents <hr />
              </li>
              <li onClick={() => props.onClick(generalQAnsEng)}>
                <a href="#top">
                  <p>General</p>
                </a>
              </li>
              <li onClick={() => props.onClick(termAndConQAnsEnd)}>
                <a href="#top">
                  <p>Terms & Conditions</p>
                </a>
              </li>
              <li onClick={() => props.onClick(mobileWalletQAnsEnd)}>
                <a href="#top">
                  <p>Mobile Wallet</p>
                </a>
              </li>
              <li onClick={() => props.onClick(transactionQAnsEnd)}>
                <a href="#top">
                  <p>Transaction Details</p>
                </a>
              </li>
              <li onClick={() => props.onClick(documentationQAnsEnd)}>
                <a href="#top">
                  <p>Documentation</p>
                </a>
              </li>
              <li onClick={() => props.onClick(varificationQAnsEnd)}>
                <a href="#top">
                  <p>Verification</p>
                </a>
              </li>
              <li onClick={() => props.onClick(permissionQAnsEnd)}>
                <a href="#top">
                  <p>Permissions</p>
                </a>
              </li>
              <li onClick={() => props.onClick(tezAdvanceQAnsEnd)}>
                <a href="#top">
                  <p>Tez Advance</p>
                </a>
              </li>
              <li onClick={() => props.onClick(financeQAnsEnd)}>
                <a href="#top">
                  <p>Financial Charges</p>
                </a>
              </li>
            </ul>
          </Grid>
        </Hidden>
        <Grid item xs={12} sm={9} lg={9} style={{ zIndex: "100" }}>
          <Collapsible
            accordion={true}
            style={{ marginTop: "-80px", textAlign: "justify" }}
          >
            {props.FAQs.FAQs.map((objVal, key) => (
              <CollapsibleItem
                key={key}
                header={<span> {objVal.question} </span>}
                icon={icon}
                className="active"
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
  );
}
export default Faqs;
