export default selectedData => {
    d3.select("svg").remove()
    console.log("in GRAPH script")

    const width = 500
    const height = 400
    const margin = 50

    var svg = d3.select("#graph")
    .append("svg")
    .attr("width", width + margin * 2)
    .attr("height", height + margin * 2)
    .append("g")
        .attr("transform",
            "translate(50 , 50)")
    
    
    let dates = []
    let max_price = 0
    selectedData.forEach( row => {
        dates.push(row["date"])
        max_price = Math.max(max_price, row["price"])
    })
    
    
    let xAxis = d3.scaleTime().domain([dates[dates.length - 1], dates[0]]).range([0, width])
    svg.append("g").call(d3.axisBottom(xAxis)).attr("transform", "translate(0," + height + ")")
    
    let yAxis = d3.scaleLinear().domain([0, max_price]).range([height, 0])
    svg.append("g").call(d3.axisLeft(yAxis))


    // console.log("selected data", selectedData)
    svg.append("path").datum(selectedData).attr("fill", "none").attr("stroke", "black").attr("stroke-width", 2)
        .attr("d", d3.line()
            .x( function(d) { return xAxis(d.date) })
            .y( function(d) { return yAxis(d.price) })
        )
    
}