import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import sponsor1 from "assets/img/sponsors/GBS-logo.png";
import sponsor2 from "assets/img/sponsors/Nutrafarms-logo.png";
import sponsor3 from "assets/img/sponsors/Wild-Pursuit-logo.png";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRounded,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Sponsors</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a 
                    href="https://www.gbscooks.com"
                    target="_blank"
                    rel="noopener noreferrer"
                   >
                    <img src={sponsor1} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {/*Rupert Boreland
                  <br />
                  <small className={classes.smallTitle}>Host Chef</small>*/}
                </h4>
                <CardBody>
                  {/*<p className={classes.description}>
                  As a corporate chef, Rupert Boreland has worked in kitchens all around 
                  the world, from Germany to Toronto and has acquired the highest 
                  attainable culinary designation CCC (certified chef de cuisine). 
                  </p>*/}
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a
                    href="https://www.nutrafarms.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={sponsor2} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {/*Rupert Boreland
                  <br />
                  <small className={classes.smallTitle}>Host Chef</small>*/}
                </h4>
                <CardBody>
                  {/*<p className={classes.description}>
                  As a corporate chef, Rupert Boreland has worked in kitchens all around 
                  the world, from Germany to Toronto and has acquired the highest 
                  attainable culinary designation CCC (certified chef de cuisine). 
                  </p>*/}
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <a
                    href="https://wildtv.ca"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={sponsor3} alt="..." className={imageClasses} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  {/*Rupert Boreland
                  <br />
                  <small className={classes.smallTitle}>Host Chef</small>*/}
                </h4>
                <CardBody>
                  {/*<p className={classes.description}>
                  As a corporate chef, Rupert Boreland has worked in kitchens all around 
                  the world, from Germany to Toronto and has acquired the highest 
                  attainable culinary designation CCC (certified chef de cuisine). 
                  </p>*/}
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

TeamSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(teamStyle)(TeamSection);
