let features = [
    {
        FeatureName: "Feature1",
        FeatureID: "FEAT1001",
        Description: "Description of Feature1",
        ServiceProduct: "Product A",
        Currency: "USD"
    },
    {
        FeatureName: "Feature2",
        FeatureID: "FEAT1002",
        Description: "Description of Feature2",
        ServiceProduct: "Product B",
        Currency: "EUR"
    },
    {
        FeatureName: "Feature3",
        FeatureID: "FEAT1003",
        Description: "Description of Feature3",
        ServiceProduct: "Product C",
        Currency: "GBP"
    },
    {
        FeatureName: "Feature4",
        FeatureID: "FEAT1004",
        Description: "Description of Feature4",
        ServiceProduct: "Product D",
        Currency: "USD"
    },
    {
        FeatureName: "Feature5",
        FeatureID: "FEAT1005",
        Description: "Description of Feature5",
        ServiceProduct: "Product E",
        Currency: "EUR"
    },
    {
        FeatureName: "Feature6",
        FeatureID: "FEAT1006",
        Description: "Description of Feature6",
        ServiceProduct: "Product F",
        Currency: "GBP"
    },
    {
        FeatureName: "Feature7",
        FeatureID: "FEAT1007",
        Description: "Description of Feature7",
        ServiceProduct: "Product G",
        Currency: "USD"
    },
    {
        FeatureName: "Feature8",
        FeatureID: "FEAT1008",
        Description: "Description of Feature8",
        ServiceProduct: "Product H",
        Currency: "EUR"
    },
    {
        FeatureName: "Feature9",
        FeatureID: "FEAT1009",
        Description: "Description of Feature9",
        ServiceProduct: "Product I",
        Currency: "GBP"
    },
    {
        FeatureName: "Feature10",
        FeatureID: "FEAT1010",
        Description: "Description of Feature10",
        ServiceProduct: "Product J",
        Currency: "USD"
    }
];



$(document).ready(function() {
    // Loop through the Account array
    $.each(features, function(index, feature) {
        // Append a new row to the table body
        $('.products-area-wrapper.tableView').append(
            '<div class="products-row">'+
            '  <div class="product-cell id"><span class="cell-label">Feature Name:</span>'+feature.FeatureName+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Feature ID:</span>'+feature.FeatureID+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Description:</span>'+feature.Description+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Service Product:</span>'+feature.ServiceProduct+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Currency:</span>'+feature.Currency+'</div>'+
            '  <div class="product-cell id control">'+
            '  <a href="editFeatures"><img src="assets/pen.png" style="width:20px; height:20px;"></a>'+
            '  <img src="assets/garbage.png" style="width:20px; height:20px;">'+
            '  </div>'+
            '</div>'
        );
    });
});