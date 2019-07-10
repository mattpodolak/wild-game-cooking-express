import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/salmon-3-ways.jpg";
import image2 from "assets/img/rabbit-ravioli.jpg";
import image3 from "assets/img/beaver-burger.jpg";
import image4 from "assets/img/moose-taco.jpg";
import image5 from "assets/img/venison-steak.png";

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Salmon 3-ways – Chef Rupert prepares wild Coho Salmon 3-Ways with fennel risotto, confit of cherry tomatoes and asparagus.
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Rabbit Ravioli – Chef Rupert prepares a sage rabbit ravioli with a parmesan grated cheese cloud.
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Beaver Burger – Chef Becky prepares a Beaver Burger with ground beaver and pork, cranberry compote, aioli, arugula & grilled King mushrooms.
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image4}
                      alt="Fourth slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Moose Taco – Chef Becky prepares a fried bannock taco with ground moose, pico de gallo, jalapeno{"’"}s, grated cheese and sour cream.
                      </h4>
                    </div>
                  </div>
                  <div>
                    <img
                      src={image5}
                      alt="Fifth slide"
                      className="slick-image"
                    />
                    <div className="slick-caption">
                      <h4>
                        <LocationOn className="slick-icons" />
                        Bacon Wrapped Venison Steaks with red wine demi-glace and blue cheese with mixed vegetables and a bacon stuffed hasselback potato.
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

SectionCarousel.propTypes = {
  classes: PropTypes.object
};

export default withStyles(carouselStyle)(SectionCarousel);
