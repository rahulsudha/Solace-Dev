function validatecheck_forVPN() {
    $("#downloadbutton").addClass("disabled")

    var vpnname = document.getElementById('vpnnameinput').value;
    var maxendpnts = document.getElementById('endpoints').value;
    var vpnqta = document.getElementById('quotasize').value;

    // below validates if any of the fields are is empty

    if (vpnname == "") {
        alert("Enter a VPN name");
    } else if (maxendpnts == "") {
        alert("Enter values for Max Endpoints");
    } else if (vpnqta == "") {
        alert("Enter values for VPN Quota")
    } else if ($("#typein").prop("checked") && document.getElementById('typeinbb').value == "") {
        alert("Please enter a custom value for Ingress flow");
    } else if ($("#typein2").prop("checked") && document.getElementById('egressvalue').value == "") {
        alert("Please enter a custom value for Egress flow");
    } else if ($("#typein3").prop("checked") && document.getElementById('conncount').value == "") {
        alert("Please enter a custom value for Connection count");
    } else if (document.getElementById('topicvalue').value == "") {
        alert("Enter Topic for Sync mode")
    } else if (document.getElementById('ackintervals').value == "") {
        alert("Enter Ack Intervals")
    } else {
        alert("Validated: Success");
        $("#downloadbutton").removeClass("disabled")
    }

}