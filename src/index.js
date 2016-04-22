import React from 'react';
import ReactDOM from 'react-dom';

class ChartLine extends React.Component {

  constructor(props) {
    super(props);
    this.state = { chr: "init" };
  }

  render() {
    return (
      <div className="ReactChart">
        <canvas id="canvas"></canvas>
      </div>
    );
  }

  componentDidMount() {
    var ChartData = {
      labels : this.props.data.osX,
      datasets : [
        {
          label: this.props.data.msg,
          fillColor : "#F1F1F1",
          strokeColor : "#C1C1C1",
          pointColor : "#F1F1F1",
          pointStrokeColor : "#C1C1C1",
          pointHighlightFill : "#FFFFFF",
          pointHighlightStroke : "#A1A1A1",
          data : this.props.data.osY
        }
      ]
    };
    var GlobalOptions = {
      responsive: true,
      animationEasing: "easeOutElastic",
      scaleShowGridLines : true,
      scaleGridLineColor : "#E1E1E1"
    };
    var nde = ReactDOM.findDOMNode(this);
    var ctx = nde.getElementsByTagName("canvas")[0].getContext('2d');
    this.state.chr = new Chart.Line(ctx, { data: ChartData, options: GlobalOptions });
  }

  componentDidUpdate() {
    for (var i=0; i<this.props.data.osX.length; i++) {
      this.state.chr.data.datasets[0].data[i] = this.props.data.osY[i];
    }
    this.state.chr.update();
  }
}

module.exports = { ChartLine: ChartLine };
