
import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';

class Discount extends Component {
  state = {
    discountStart: 0,
    discontEnd: 30
  }

  percentage = () => {
    if (this.state.discountStart < this.state.discontEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      });
    }
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.percentage();
    }, 30)
  }

  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
          <Fade
            onReveal={this.percentage}
          >
            <div className="discount_percentage">
              <span>{this.state.discountStart}%</span>
              <span>OFF</span>
            </div>
          </Fade>
          <Slide right>
            <div className="discount_description">
              <h3>Get ready for new adventures and purchase tickets before 20th JUNE</h3>
              <p>Nisi non consequat non incididunt reprehenderit. Laboris velit nulla minim in anim aliquip mollit ex amet enim ipsum anim. Reprehenderit sunt ex enim cillum aliqua consectetur ipsum cillum.</p>
              <MyButton 
                text="Purchase Tickets"
                bck="#ffa800"
                color="#fff"
                link="https://github.com/kirillzhurin"
              />
            </div>
          </Slide>
        </div>
      </div>
    );
  }
}

export default Discount;