export default selectedData => {
    d3.select("svg").remove()
    console.log("in GRAPH script")

    const width = 600
    const height = 500
    const margin = { top: 50, right: 50, bottom: 50, left: 50 };    

    var svg = d3.select("#graph")
    .append("svg")
    .attr("width", width)
    .attr("height", height)


}