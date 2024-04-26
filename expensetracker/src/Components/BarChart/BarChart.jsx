import React, { Component } from 'react';
import HorizontalBarChart from './HorizontalBarChart';
import './barStyles.css';

export default class BarChart extends Component {

  state = {
    data: [
      { name: 'Jane', value: 20 },
      { name: 'Jack', value: 40 },
      { name: 'Arnold', value: 35 },
    ]
  };

  render() {
    const { data } = this.state;

    return (
      <HorizontalBarChart 
        data={ data } 
        chartTitle="This is a sample chart"
        showValueOnBar={ true }
      />
    );
  }
}