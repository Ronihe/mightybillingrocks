/*function dbm_calculation()
{
    var tech_fee = document.getElementById("tech").value //float
    var media_cost = document.getElementById("media").value;
    var data_fee = document.getElementById("data").value;
    var service_fee = document.getElementById("service").value; //float

    console.log("tech: "+tech_fee+" media: "+media_cost+" data: "+data_fee+" other: "+service_fee)
    try {
            media_invoice = (parseFloat(media_cost)*parseFloat(tech_fee)+parseFloat(data_fee)) * parseFloat(service_fee)
            console.log("Media Invoice is:" +media_invoice)
            document.getElementById("result").innerText = "The invoice about is: $"+media_invoice
        }
    catch(err) {
        document.getElementById("result").innerText = "Make sure you have entered the correct amounts as numbers";
        }
    return false
}*/
document.querySelector('#submit').addEventListener("click", function(event) {
    let tech_fee = document.getElementById("tech").value  || 0;//float
    let media_cost = document.getElementById("media").value || 0;
    let data_fee = document.getElementById("data").value || 0;
    let service_fee = document.getElementById("service").value ||0; //float
    let dcm_invoice_amount = document.getElementById("dcmInvoice").value ||0; //float
    let ds_spending = document.getElementById("dsSpending").value ||0; //float
    let ds_rate = document.getElementById("dsRate").value ||0; 
    let ds_service_fee = document.getElementById("dsServiceRate").value ||0;
    



    tech_fee = parseFloat(1+(tech_fee/100));
    service_fee = parseFloat(1+(service_fee/100));
    media_cost = parseFloat(media_cost);
    data_fee = parseFloat(data_fee);
    dcm_invoice_amount = parseFloat(dcm_invoice_amount);
    ds_spending = parseFloat(ds_spending);
    ds_rate = parseFloat(1+(ds_rate/100));
    ds_service_fee = parseFloat(1+(ds_service_fee/100));
    




    //try {
            let dbm_media_invoice = (((media_cost * tech_fee) + data_fee) * service_fee).toFixed(2);
            let dbm_min_con = (dbm_media_invoice - (media_cost + data_fee)).toFixed(2);
            let ds_inv = (ds_spending * ds_rate * ds_service_fee - ds_spending).toFixed(2);
            let total_inv = (parseFloat(dbm_media_invoice) + parseFloat(ds_inv) + dcm_invoice_amount).toFixed(2);
            let total_min = (parseFloat(dbm_min_con) + parseFloat(dcm_invoice_amount) +dcm_invoice_amount).toFixed(2);
            



            document.getElementById("dbmCalculation").innerText = "DBM Invoice Amount = (("+media_cost+" * "+tech_fee+") + "+data_fee+") * "+service_fee+" = "+dbm_media_invoice;
            
            document.getElementById("dbmMinContribution").innerText = "DBM Contribution Towards Minimum = "+dbm_media_invoice+" - ("+media_cost+"+"+data_fee+") = "+dbm_min_con;

            document.getElementById("dcmCalculation").innerText = "DCM Invoice Amount = "+dcm_invoice_amount;

            document.getElementById("dcmMinContribution").innerText = "DCM Contribution Towards Minimum = "+dcm_invoice_amount;

            document.getElementById("dsCalculation").innerText = "DS Invoice Amount = ("+ds_spending+" * "+ds_rate+" * "+ds_service_fee+") - "+ds_spending+" = "+ds_inv;
            document.getElementById("dsMinContribution").innerText = "DS Contribution Towards Minimum = "+ds_inv;

            document.getElementById("totalCalculation").innerText = "Total Invoice Amount = "+dbm_media_invoice+" + "+dcm_invoice_amount+" + "+ds_inv+" = "+total_inv;
            document.getElementById("totalMinContribution").innerText = "Total Contribution Towards Minimum = "+dbm_min_con+" + "+dcm_invoice_amount+" + "+ds_inv+" = "+total_min;

            // tech_fee = document.getElementById("tech").value = "";//float
            // media_cost = document.getElementById("media").value = "";
            // data_fee = document.getElementById("data").value = "";
            // service_fee = document.getElementById("service").value = ""; //float
            // dcm_invoice_amount = document.getElementById("dcmInvoice").value = ""; //float
            // ds_spending = document.getElementById("dsSpending").value = ""; //float
            // ds_rate = document.getElementById("dsRate").value = ""; 
            // ds_service_fee = document.getElementById("dsServiceRate").value = "";



    //     }
    // catch(err) {
    //     document.getElementById("calculation").innerText = "Make sure you have entered the correct amounts as numbers";
    //     }
    // event.preventDefault();
}, false);
/*document.getElementById('submit').addEventListener('click', dbm_calculation);
*/

document.querySelector('#submit2').addEventListener("click", function(event) {

    let pg_budget = document.getElementById("pgBuget").value ||0;
    let pg_plat_form_fee = document.getElementById("pgPlatFormFee").value ||4;
    let pg_service_rate = document.getElementById("pgServiceRate").value ||0; //float

    pg_budget = parseFloat(pg_budget);
    pg_plat_form_fee = parseFloat(1+(pg_plat_form_fee/100));
    pg_service_rate = parseFloat(1+(pg_service_rate/100));

    let publisherMediaCost = (pg_budget / pg_plat_form_fee / pg_service_rate).toFixed(2);
    document.getElementById("publisherMediaCost").innerText = "Media Cost = "+pg_budget+" ÷ "+pg_plat_form_fee+" ÷ "+pg_service_rate+" = "+publisherMediaCost;

    // pg_plat_form_fee = document.getElementById("pgPlatFormFee").value = "";
    // pg_service_rate = document.getElementById("pgServiceRate").value = ""; //float





}, false);




