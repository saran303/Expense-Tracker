import React, { Component } from 'react';

class HorizontalBarGroup extends Component {
  render() {
    const { d, barHeight, barColor, showValueOnBar } = this.props;

    const barPadding = 2;
    const barColors = barColor || '#ea114f';
    const widthScale = d => d * 10;

    const width = widthScale(d.value);
    const yMid = barHeight * 0.5;

    return (
      <g className="bar-group">
        <text className="name-label" x="-6" y={ yMid } alignmentBaseline="middle">{ d.name }</text>
        <rect y={ barPadding * 0.5 } width={ width } height={ barHeight - barPadding } fill={ barColors } />
        { showValueOnBar && (<text className="value-label" x={ width - 8 } y={ yMid } alignmentBaseline="middle">{ d.value }</text>) }
      </g>
    );
  }
}

export default class HorizontalBarChart extends Component {
  render() {
    const { data, chartTitle, showValueOnBar } = this.props;
    const barHeight = 30
    const barGroups = data.map((d, i) => <g transform={`translate(0, ${i * barHeight})`}><HorizontalBarGroup d={d} barHeight={barHeight} showValueOnBar={ showValueOnBar } /></g>)

    return (
      <svg width="500" height="300" className='wrapperbar'>
        <g className="container">
          {/* { chartTitle && (<text className="title" x="10" y="30">{ chartTitle }</text>) } */}
          <g className="chart" transform="translate(50,60)">
            {barGroups}
          </g>
        </g>
      </svg>
    );
  }

}