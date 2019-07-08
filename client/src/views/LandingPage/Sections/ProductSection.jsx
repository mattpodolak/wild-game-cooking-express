import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import ListAlt from "@material-ui/icons/ListAlt";
import DoneAll from "@material-ui/icons/DoneAll";
import FilterList from "@material-ui/icons/FilterList";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Wild Game</h2>
            <h5 className={classes.description}>
              Game [/ɡām/]: Game, in gastronomy, the flesh of any wild animal or bird. Game is usually classified according to three categories: small foul, game proper, and big game. 
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                description="Learn How to Cook Wild Game Without Any Hang-ups. 
                Each episode will show you different ways on how to prepare your Wild Game."
                icon={ListAlt}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                description="Our Team of Chefs will demonstrate some quick and easy ways to prepare wild game. You work hard getting it, you might as well enjoy it to it’s fullest."
                icon={DoneAll}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                //title="Big Game"
                description="Wild Game doesn’t have to be boiled meat. It can be whatever your mind can imagine. Let Wild Game Cooking show you how to get the most from your wild game."
                icon={FilterList}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

ProductSection.propTypes = {
  classes: PropTypes.object
};

export default withStyles(productStyle)(ProductSection);
