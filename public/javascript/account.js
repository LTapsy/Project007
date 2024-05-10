let Account = [
    {
        ID: 1,
        AccountName: "Acme Corporation",
        Type: "Company",
        CustomerType: "Enterprise",
        TermType: "Annual",
        BillingContact: "John Smith",
        BillingContactEmail: "john.smith@acme.com",
        AccountCurrency: "USD",
        BillingAddress: "123 Main Street, Cityville",
        CMMS_Subdomain: "acme"
    },
    {
        ID: 2,
        AccountName: "Tech Solutions Inc.",
        Type: "Company",
        CustomerType: "Small Business",
        TermType: "Monthly",
        BillingContact: "Emily Johnson",
        BillingContactEmail: "emily.johnson@techsolutions.com",
        AccountCurrency: "EUR",
        BillingAddress: "456 Elm Street, Tech City",
        CMMS_Subdomain: "techsolutions"
    },
    {
        ID: 3,
        AccountName: "Global Enterprises Ltd.",
        Type: "Company",
        CustomerType: "Enterprise",
        TermType: "Quarterly",
        BillingContact: "Michael Brown",
        BillingContactEmail: "michael.brown@globalenterprises.com",
        AccountCurrency: "GBP",
        BillingAddress: "789 Oak Avenue, Globetown",
        CMMS_Subdomain: "globalenterprises"
    },
    {
        ID: 4,
        AccountName: "Health First Medical Center",
        Type: "Organization",
        CustomerType: "Healthcare",
        TermType: "Annual",
        BillingContact: "Sarah Williams",
        BillingContactEmail: "sarah.williams@healthfirst.com",
        AccountCurrency: "USD",
        BillingAddress: "10 Hospital Road, Medtown",
        CMMS_Subdomain: "healthfirst"
    },
    {
        ID: 5,
        AccountName: "Alpha Technologies",
        Type: "Company",
        CustomerType: "Startup",
        TermType: "Monthly",
        BillingContact: "David Lee",
        BillingContactEmail: "david.lee@alphatech.com",
        AccountCurrency: "USD",
        BillingAddress: "234 Beta Street, Techville",
        CMMS_Subdomain: "alphatech"
    },
    {
        ID: 6,
        AccountName: "Green Energy Solutions",
        Type: "Company",
        CustomerType: "Sustainability",
        TermType: "Annual",
        BillingContact: "Emma Garcia",
        BillingContactEmail: "emma.garcia@greenenergy.com",
        AccountCurrency: "USD",
        BillingAddress: "567 Green Street, Eco City",
        CMMS_Subdomain: "greenenergy"
    },
    {
        ID: 7,
        AccountName: "Innovative Ventures LLC",
        Type: "Company",
        CustomerType: "Small Business",
        TermType: "Quarterly",
        BillingContact: "Daniel Clark",
        BillingContactEmail: "daniel.clark@innovativeventures.com",
        AccountCurrency: "USD",
        BillingAddress: "789 Innovation Avenue, Innovatown",
        CMMS_Subdomain: "innovativeventures"
    },
    {
        ID: 8,
        AccountName: "Golden Age Retirement Homes",
        Type: "Organization",
        CustomerType: "Senior Care",
        TermType: "Annual",
        BillingContact: "Helen Martinez",
        BillingContactEmail: "helen.martinez@goldenage.com",
        AccountCurrency: "USD",
        BillingAddress: "12 Golden Lane, Elder City",
        CMMS_Subdomain: "goldenage"
    },
    {
        ID: 9,
        AccountName: "Smart Tech Innovations",
        Type: "Company",
        CustomerType: "Technology",
        TermType: "Monthly",
        BillingContact: "Sophia Adams",
        BillingContactEmail: "sophia.adams@smarttech.com",
        AccountCurrency: "USD",
        BillingAddress: "345 Smart Street, Techland",
        CMMS_Subdomain: "smarttech"
    },
    {
        ID: 10,
        AccountName: "Educational Excellence Academy",
        Type: "Organization",
        CustomerType: "Education",
        TermType: "Annual",
        BillingContact: "William Turner",
        BillingContactEmail: "william.turner@educationexcellence.com",
        AccountCurrency: "USD",
        BillingAddress: "678 School Avenue, Eduville",
        CMMS_Subdomain: "educationexcellence"
    }
];



$(document).ready(function() {
    // Loop through the Account array
    $.each(Account, function(index, account) {
        // Append a new row to the table body
        $('.products-area-wrapper.tableView').append(
            '<div class="products-row">'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">ID:</span>'+account.ID+'</div>'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">Account Name:</span>'+account.AccountName+'</div>'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">Customer Type:</span>'+account.CustomerType+'</div>'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">Term Type:</span>'+account.TermType+'</div>'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">Billing Contact:</span>'+account.BillingContact+'</div>'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">Account Currency:</span>'+account.AccountCurrency+'</div>'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">Billing Address:</span>'+account.BillingAddress+'</div>'+
            '  <div class="product-cell id" onClick="selectAccount('+account.ID+')"><span class="cell-label">CMMS Subdomain:</span>'+account.CMMS_Subdomain+'</div>'+
            '</div>'
        );
    });
});



function selectAccount(id){
    const selectedAccount = Account.find(account => account.ID === id);
    
    console.log(selectedAccount);
    $('.popup-content').empty();
    $('.popup-content').append(
        '<span class="close" onclick="closePopup()">&times;</span>'+
        '<h2>Edit Customer Information</h2>'+
        '<button id="openPopupBtn">Edit Info</button>'+
        '<div class="info-container">'+
        '  <div>'+
        '      <h3>AccountCurrency</h3>'+
        '      <p>'+selectedAccount.AccountCurrency+'</p>'+
        '      <h3>AccountName</h3>'+
        '      <p>'+selectedAccount.AccountName+'</p>'+
        '      <h3>BillingAddress</h3>'+
        '      <p>'+selectedAccount.BillingAddress+'</p>'+
        '      <h3>BillingContact</h3>'+
        '      <p>'+selectedAccount.BillingContact+'</p>'+
        '      <h3>BillingContactEmail</h3>'+
        '      <p>'+selectedAccount.BillingContactEmail+'</p>'+
        '  </div>'+
        '  <div>'+
        '      <h3>CMMS_Subdomain</h3>'+
        '      <p>'+selectedAccount.CMMS_Subdomain+'</p>'+
        '      <h3>CustomerType</h3>'+
        '      <p>'+selectedAccount.CustomerType+'</p>'+
        '      <h3>ID</h3>'+
        '      <p>'+selectedAccount.ID+'</p>'+
        '      <h3>TermType</h3>'+
        '      <p>'+selectedAccount.TermType+'</p>'+
        '      <h3>Type</h3>'+
        '      <p>'+selectedAccount.Type+'</p>'+
        '  </div>'+
        '</div>'
    );
    openPopup()
}





// Function to open the popup
function openPopup() {
    document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
    document.getElementById("popup").style.display = "none";
}