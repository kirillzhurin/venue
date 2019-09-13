import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    durations: ['2 day', '3 days', '1 week'],
    desc: [
      'Commodo exercitation ullamco mollit consectetur Lorem do enim et elit officia deserunt duis.',
      'Qui duis sunt veniam nisi exercitation voluptate aute minim ut laboris culpa adipisicing aliqua tempor.',
      'Incididunt cupidatat nostrud incididunt culpa officia officia esse elit cupidatat sint eiusmod.'
    ],
    linkTo: [
      'https://github.com/kirillzhurin',
      'https://github.com/kirillzhurin',
      'https://github.com/kirillzhurin'
    ],
    delay: [500, 0, 500]

  }

  showBoxes = () => (
    this.state.prices.map((box, index) => (
      <Zoom key={index} delay={this.state.delay[index]}>
        <div className="pricing_item">
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${this.state.prices[index]}</span>
              <span>{this.state.durations[index]}</span>
            </div>
            <div className="pricing_description">
            {this.state.desc[index]}
            </div>
            <div className="pricing_buttons">
              <MyButton 
                text="Purchase"
                bck="#ffa800"
                color="#fff"
                link={this.state.linkTo[index]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ))
    
  );

  render() {
    return (
      <div className="bck_black">
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
          <div className="pricing_wrapper">
            {this.showBoxes()}
          </div>
        </div>
      </div>
    );
  }
}

export default Pricing;