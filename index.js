'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ChartLine = function (_React$Component) {
  _inherits(ChartLine, _React$Component);

  function ChartLine(props) {
    _classCallCheck(this, ChartLine);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ChartLine).call(this, props));

    _this.state = { chr: "init" };
    return _this;
  }

  _createClass(ChartLine, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'ReactChart' },
        _react2.default.createElement('canvas', { id: 'canvas' })
      );
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var ChartData = {
        labels: this.props.data.osX,
        datasets: [{
          label: this.props.data.msg,
          fillColor: "#F1F1F1",
          strokeColor: "#C1C1C1",
          pointColor: "#F1F1F1",
          pointStrokeColor: "#C1C1C1",
          pointHighlightFill: "#FFFFFF",
          pointHighlightStroke: "#A1A1A1",
          data: this.props.data.osY
        }]
      };
      var GlobalOptions = {
        responsive: true,
        animationEasing: "easeOutElastic",
        scaleShowGridLines: true,
        scaleGridLineColor: "#E1E1E1"
      };
      var nde = _reactDom2.default.findDOMNode(this);
      var ctx = nde.getElementsByTagName("canvas")[0].getContext('2d');
      this.state.chr = new Chart.Line(ctx, { data: ChartData, options: GlobalOptions });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      for (var i = 0; i < this.props.data.osX.length; i++) {
        this.state.chr.data.datasets[0].data[i] = this.props.data.osY[i];
      }
      this.state.chr.update();
    }
  }]);

  return ChartLine;
}(_react2.default.Component);

module.exports = { ChartLine: ChartLine };
