import graph from "./graph"

export default () => {
    let ticker = document.getElementById("stock-search-input").value.toUpperCase()

    d3.csv("src/data/stock-data-5-cleaned.csv").then(function(data) {
        let selectedData = []
        data.forEach(row => {
            if (row["ticker"] === ticker) {
                let parsedRow = {ticker: row["ticker"], price: +row["adjusted_close"]}
                parsedRow["date"] = (d3.timeParse("%m/%d/%Y")(row.timestamp))
                selectedData.push(parsedRow)
            }
        })
        if (selectedData.length === 0) {
            console.log("TICKER NOT FOUND")
        } else {
            // console.log("selected data", selectedData)
            graph(selectedData)
        }
    });
    
}