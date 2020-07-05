import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';
import ReactGA from 'react-ga';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  state = {
    showToast: true,
    sending: false,
    text: "Send Message"
  };

  changeText = (text) => {

    this.setState({ text }); 
  } 

  resetForm(){
    document.getElementById('contact-form').reset();
    this.changeText("Send Message");
  }

  handleSubmit(e){
    e.preventDefault();
    ReactGA.event({
      category: "Contact Us",
      action: "User submitted a message using the contact form on the home page",
    });
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    this.changeText("Sending");
    let self = this;
    axios({
        method: "POST", 
        url:"/api/send", 
        data: {
            name: name,   
            email: email,  
            message: message
        }
    }).then((response)=>{
        if (response.data.msg === 'success'){
            this.changeText("Message Sent");
            alert("Message Sent."); 
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            //alert("Message failed to send.")
            this.changeText("Try Again");
        }
        else{
          this.changeText("Try Again");
        }
    }).catch(function (error) {
      // handle error
      //alert("Message failed to send.")
      console.log("Mailing error: ", error);
      self.changeText("Try Again");
    })
  }

  render() {
    const { classes } = this.props;
    const { text } = this.state;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact Us</h2>
            <h4 className={classes.description}>
            We’d love to hear from you.
            Drop us a line to tell us one of your favorite Wild Game dishes, 
            or if you would like a recipe featured on one of our shows.
            </h4>
            <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button type="submit" color="primary">{text}</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

WorkSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(workStyle)(WorkSection);
