import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

class AboutPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Episode Summaries</h3>
            </div>
            <div className={classes.title}>
              <h3>
                <small>Season 1</small>
              </h3>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                  color="primary"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Episode 1",
                      //tabIcon: Dashboard,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          Hunter/trapper Mike goes Moose hunting and Chef Becky shows Mike a different way of preparing some of his moose meat with a special Moose taco. Then Host Chef Rupert shows how extra rabbit meat can be preserved then used to make delicious rabbit ravioli.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 2",
                      //tabIcon: Schedule,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          While out checking his traps, Mike discovers that he has trapped a beaver and Chef Becky shows him how to make Beaver Burgers on the grill. Chef Rupert uses some wild Coho Salmon three ways to make a gourmet dish.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 3",
                      //tabIcon: List,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          Chef Rupert goes pheasant hunting with one of his friends and then shows us how to make a pan-roasted pheasant with porcini mushrooms, steamed potatoes and braised cabbage.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 4",
                      //tabIcon: List,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          We visit Orlando Florida to find out all about Gator Hunting. Captain Kevin of Get Bit Outdoors introduces us to alligator hunting, then Chef Rupert cooks up a gourmet
alligator dish. Blackened alligator on warm wax bean and watercress salad with
black olive, tomato and caper salsa. 

                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 5",
                      //tabIcon: List,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          Trapper Mike goes hunting and brings back a goose and a duck. Chef Becky shows
him how to make a goose-duck roast, then later Chef Rupert cooks up a chucker
partridge with a Chucker Pot-Pie.

                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12} lg={6}>
              <NavPills
                  color="primary"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Episode 6",
                      //tabIcon: Dashboard,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          After getting one wild turkey, Chef Rupert goes out again to fill his second tag and
we join him on his hunt. Then, Chef Rupert cooks up some wild turkey and makes a
family-style presentation with potato gnocchi and wild turkey scaloppini.

                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 7",
                      //tabIcon: Schedule,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          Hunter Eric goes deer hunting and Chef Raffi shows him how to make a Leg of Venison roast. Then Chef Rupert kicks things up a notch as he demonstrates how to prepare a bacon-wrapped venison steak with steamed vegetables and baked hasselback potatoes.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 8",
                      //tabIcon: List,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          It’s bear season, and Hunter Mike gets a bear. He takes it to Chef Raffi who prepares Bear tenderloin burgers with garden fresh vegetables and berry aioli. Later Chef Rupert shows how ground bear meat can be mixed with some ground wild boar meat to make delicious Bear Kabobs and rice pilaf.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 9",
                      //tabIcon: List,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          Chef Raffi prepares a pig for a pig-roast and de-bones the entire animal. Later
we visit Kevin of Get Bit Outdoors in Orlando Florida who highlights what it’s like to go out on a Wild Boar hunt. Then Chef Rupert shows us how to best prepare wild boar on the grill.
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Episode 10",
                      //tabIcon: List,
                      tabContent: (
                        <span className={classes.pillText}>
                          <p>
                          We will be featuring a couple of fishing trips in this episode, which we have yet to shoot.
                          </p>
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

AboutPills.propTypes = {
  classes: PropTypes.object
};

export default withStyles(pillsStyle)(AboutPills);
