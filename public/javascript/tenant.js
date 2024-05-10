let tenants = [
    {
        Tenant: "Tenant 1",
        ExternalTenantID: "EXT001",
        Currency: "USD",
        TenantName: "Acme Tenant",
        InternalTenantID: "INT001",
        Status: "Active",
        AdminContact: "Alice Johnson",
        Account: "Acme Corporation"
    },
    {
        Tenant: "Tenant 2",
        ExternalTenantID: "EXT002",
        Currency: "EUR",
        TenantName: "Tech Solutions Tenant",
        InternalTenantID: "INT002",
        Status: "Active",
        AdminContact: "Bob Smith",
        Account: "Tech Solutions Inc."
    },
    {
        Tenant: "Tenant 3",
        ExternalTenantID: "EXT003",
        Currency: "GBP",
        TenantName: "Global Enterprises Tenant",
        InternalTenantID: "INT003",
        Status: "Active",
        AdminContact: "Carol Wilson",
        Account: "Global Enterprises Ltd."
    },
    {
        Tenant: "Tenant 4",
        ExternalTenantID: "EXT004",
        Currency: "USD",
        TenantName: "Health First Tenant",
        InternalTenantID: "INT004",
        Status: "Active",
        AdminContact: "David Brown",
        Account: "Health First Medical Center"
    },
    {
        Tenant: "Tenant 5",
        ExternalTenantID: "EXT005",
        Currency: "USD",
        TenantName: "Alpha Tech Tenant",
        InternalTenantID: "INT005",
        Status: "Active",
        AdminContact: "Emma Garcia",
        Account: "Alpha Technologies"
    },
    {
        Tenant: "Tenant 6",
        ExternalTenantID: "EXT006",
        Currency: "USD",
        TenantName: "Green Energy Tenant",
        InternalTenantID: "INT006",
        Status: "Active",
        AdminContact: "Frank Adams",
        Account: "Green Energy Solutions"
    },
    {
        Tenant: "Tenant 7",
        ExternalTenantID: "EXT007",
        Currency: "USD",
        TenantName: "Innovative Ventures Tenant",
        InternalTenantID: "INT007",
        Status: "Active",
        AdminContact: "Gina Martinez",
        Account: "Innovative Ventures LLC"
    },
    {
        Tenant: "Tenant 8",
        ExternalTenantID: "EXT008",
        Currency: "USD",
        TenantName: "Golden Age Tenant",
        InternalTenantID: "INT008",
        Status: "Active",
        AdminContact: "Henry Turner",
        Account: "Golden Age Retirement Homes"
    },
    {
        Tenant: "Tenant 9",
        ExternalTenantID: "EXT009",
        Currency: "USD",
        TenantName: "Smart Tech Tenant",
        InternalTenantID: "INT009",
        Status: "Active",
        AdminContact: "Isabel White",
        Account: "Smart Tech Innovations"
    },
    {
        Tenant: "Tenant 10",
        ExternalTenantID: "EXT010",
        Currency: "USD",
        TenantName: "Education Excellence Tenant",
        InternalTenantID: "INT010",
        Status: "Active",
        AdminContact: "Jack Clark",
        Account: "Educational Excellence Academy"
    }
];



$(document).ready(function() {
    // Loop through the Account array
    $.each(tenants, function(index, tenant) {
        // Append a new row to the table body
        $('.products-area-wrapper.tableView').append(
            '<div class="products-row">'+
            '  <div class="product-cell id"><span class="cell-label">Tenant:</span>'+tenant.Tenant+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">External Tenant ID:</span>'+tenant.ExternalTenantID+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Currency:</span>'+tenant.Currency+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Tenant Name:</span>'+tenant.TenantName+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Internal Tenant ID:</span>'+tenant.InternalTenantID+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Status:</span>'+tenant.Status+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Admin Contact:</span>'+tenant.AdminContact+'</div>'+
            '  <div class="product-cell id"><span class="cell-label">Account Name:</span>'+tenant.Account+'</div>'+
            '</div>'
        );
    });
});