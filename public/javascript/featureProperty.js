let properties = [
    {
        PropertyName: "Property1",
        Feature: "Feature1",
        DataType: "String",
        Currency: "USD"
    },
    {
        PropertyName: "Property2",
        Feature: "Feature2",
        DataType: "Integer",
        Currency: "EUR"
    },
    {
        PropertyName: "Property3",
        Feature: "Feature3",
        DataType: "Boolean",
        Currency: "GBP"
    },
    {
        PropertyName: "Property4",
        Feature: "Feature4",
        DataType: "Float",
        Currency: "USD"
    },
    {
        PropertyName: "Property5",
        Feature: "Feature5",
        DataType: "Date",
        Currency: "EUR"
    },
    {
        PropertyName: "Property6",
        Feature: "Feature6",
        DataType: "String",
        Currency: "GBP"
    },
    {
        PropertyName: "Property7",
        Feature: "Feature7",
        DataType: "Integer",
        Currency: "USD"
    },
    {
        PropertyName: "Property8",
        Feature: "Feature8",
        DataType: "Boolean",
        Currency: "EUR"
    },
    {
        PropertyName: "Property9",
        Feature: "Feature9",
        DataType: "Float",
        Currency: "GBP"
    },
    {
        PropertyName: "Property10",
        Feature: "Feature10",
        DataType: "Date",
        Currency: "USD"
    }
];

$(document).ready(function() {
    // Loop through the Account array
    $.each(properties, function(index, property) {
        // Append a new row to the table body
        $('.products-area-wrapper.tableView').append(
            '<div class="products-row">'+
            '  <div class="product-cell id"><span class="cell-label">Property Name:</span>'+property.PropertyName+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Feature:</span>'+property.Feature+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Data Type:</span>'+property.DataType+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Currency:</span>'+property.Currency+'</div>'+
            '  <div class="product-cell id control">'+
            '  <a href="editfeaturedProperty"><img src="assets/pen.png" style="width:20px; height:20px;"></a>'+
            '  <img src="assets/garbage.png" style="width:20px; height:20px;">'+
            '  </div>'+
            '</div>'
        );
    });
});