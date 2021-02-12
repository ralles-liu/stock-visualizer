import graph from "./graph"

export default () => {
    let ticker = document.getElementById("stock-search-input").value.toUpperCase()

    d3.csv("src/data/test.csv").then(function(data) {
        let selectedData = []
        data.forEach(row => {
            if (row["ticker"] === ticker) {
                let parsedRow = []
                selectedData.push(row)
            }
        })
        if (selectedData.length === 0) {
            console.log("TICKER NOT FOUND")
        } else {
            console.log("selected data", selectedData)
            graph(selectedData)
        }
    });
    
}