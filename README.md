# stock-visualizer

## Background/Overview

Understanding and digesting historical stock performance is a really important part of making sound future investment decisions. This visualizer will be designed with the goal to make it easy and clear for users to see how their portfolios (actual or hypothetical) are performing. Additionally it will provide various ancillary information such as performance against benchmarks as well as various financial ratios. Users will be able to upload transaction history of stocks they bought/sold at certain prices and the visualizer will properly display all the information.

## Functionality/MVP
Users will be able to:
*	Upload a list of stock transactions in .csv format
*	See his portfolios performance over time as well as relative to other indexes of their choosing 
*	Interact with the graph to shift the time horizon
*	See additional statistics about the portfolio including sector breakout and various financial ratios (ie beta, sharpe ratio)

Additionally the project will include: 

*	A production README
*	Page explaining the general tips to using the visualizer 

## Wireframes

The will be a single page to display the performance, but will have an initial modal type view where the user will update a portfolio. The top of the page will show the actual stock chart along with any comparisons. The user can interact with the top chart to change what data they see. The bottom half will contain the additional data visualizations/financial metrics.

![alt text](https://raw.githubusercontent.com/ralles-liu/stock-visualizer/main/src/assets/images/wireframe.png)

## Architecture and Technologies

The project will use Javacsript to handle the base logic and D3.js to actually show my chart/diagram visualizations. I will use TD Ameritrades APIs in order to pull information regarding stocks. I will have a chart.js file that will handle the logic of rendering my chart and then an additional-data.js file that handles the diagrams and financial metrics 

## Implementation Timeline

* Day 1: Go through and set up the basics of the project and learn how to use D3 and TD's stock APIs. Figure out how to get data input from the user and have it properly be translated from csv to the backend
* Day 2: Figure out calculations of historical performance and how to chart it. It will be based on a percentage change when comparing with other indexes. This calculation will be the real meat and bones as there are many different edge cases that I need to watch out for
* Day 3: Render the charts for information such as portfolio breakdown (industry will be pulled from stock APIs)
* Day 4: Finally render the various financial metrics like alpha, beta, etc. Also allow the chart to be interactive so the user can see different time horizons
