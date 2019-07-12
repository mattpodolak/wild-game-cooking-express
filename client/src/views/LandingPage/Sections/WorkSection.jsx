import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import '@shopify/polaris/styles.css';
import withStyles from "@material-ui/core/styles/withStyles";
import axios from 'axios';

// @shopify/polaris
import {Spinner, Toast, Frame} from '@shopify/polaris';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
  state = {
    showToast: false,
    sending: false
  };

  sendStatus = "Send Message";

  toggleToast(){
    this.state.showToast = !this.state.showToast;
  }
  startSend(){
    this.state.sending = true;
  }
  stopSend(){
    this.state.sending = false;
  }

  initStatus(){
    this.sendStatus = "Send Message";
  }
  failStatus(){
    this.stopSend();
    this.sendStatus = "Try Again";
  }
  resetForm(){
    document.getElementById('contact-form').reset();
    this.stopSend();
    this.initStatus();
  }

  handleSubmit(e){
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    this.startSend();
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
            //alert("Message Sent."); 
            this.toggleToast()
            this.resetForm()
        }else if(response.data.msg === 'fail'){
            //alert("Message failed to send.")
            this.failStatus();
        }
        else{
          this.failStatus();
        }
    })
  }

  render() {
    const { classes } = this.props;
    const { showToast, sending} = this.state;
    const toastMarkup = showToast ? (
      <Toast content="Message sent" onDismiss={this.toggleToast} duration={4} />
    ) : null;
    const spinMarkup = sending ? (
      <Spinner size="large" color="inkLightest" />
    ) : null;
    const buttonMarkup = !sending ? (
      <Button type="submit" color="primary">{this.sendStatus}</Button>
    ) : null;
    this.initStatus();
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
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
                    {buttonMarkup}
                    {spinMarkup}
                    <Frame>
                      {toastMarkup}
                    </Frame>  
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
