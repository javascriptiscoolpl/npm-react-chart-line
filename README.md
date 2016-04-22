# Description

This is npm version of simple Chart.js Line React component available at: [github.com/javascriptiscoolpl/react-chart-line](https://github.com/javascriptiscoolpl/react-chart-line). However, this version has been changed to support npm chart.js version, ES6 syntax and npm module environment.

# Install

    npm install react-chart-line

# Usage - show

##### index.html

    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <title>example</title>
        <style>
        .ReactChart {
          width: 800px;
          border: 1px solid red;
        }
        </style>
      </head>
      <body>
        <div id="app"></div>
        <script src="index.js"></script>
      </body>
    </html>

##### index.js

    import React from "react";
    import ReactDOM from "react-dom";
    import Chart from "chart.js";
    import rcl from "react-chart-line";

    var chart = { msg: "test chart", osX: [], osY: [] };
    for (var i=0,x=-10; i<20; i++,x++) {
      chart.osX[i] = x;
      chart.osY[i] = Math.sin(x)-Math.tan(x);
    }

    ReactDOM.render(
      <rcl.ChartLine data={chart}/>,
      document.getElementById('app')
    );

# Usage - update

##### index.js

    function setRandomChart() {
      var chart = { msg: "testing random chart", osX: [], osY: [] };
      for (var i=0,x=-10; i<20; i++,x++) {
        chart.osX[i] = x;
        chart.osY[i] = Math.random();
      }
      ReactDOM.render(
        <rcl.ChartLine data={chart}/>,
        document.getElementById('app')
      );
    }
    setInterval(() => { setRandomChart() }, 5000);


# Demo

The demo is available in module directory. To test the demo just go to <code>demo</code> directory in module folder and open <code>index.html</code> in your browser.

However, you can build the demo again with npm. To re-build the demo just go to <code>demo</code> directory in module folder and run command:

    npm run build

This should download all packages and build the demo <code>index.js</code> file again. After it you can open <code>index.html</code> in your browser. Should work :-)

# License

MIT
