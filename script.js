function validateAndGetFormData() {
    var shipmentNoVar = $("#shipmentNo").val();
    if (shipmentNoVar === "") {
        alert("Shipment No. is required");
        $("#shipmentNo").focus();
        return "";
    }
    var descriptionVar = $("#description").val();
    var sourceVar = $("#source").val();
    var destinationVar = $("#destination").val();
    var shippingDateVar = $("#shippingDate").val();
    var expectedDeliveryDateVar = $("#expectedDeliveryDate").val();
    var jsonStrObj = {
        shipmentNo: shipmentNoVar,
        description: descriptionVar,
        source: sourceVar,
        destination: destinationVar,
        shippingDate: shippingDateVar,
        expectedDeliveryDate: expectedDeliveryDateVar
    };
    return JSON.stringify(jsonStrObj);
}

function resetForm() {
    $("#shipmentForm").trigger("reset");
    $("#shipmentNo").focus();
}

function saveShipment() {
    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }
    var putReqStr = createPUTRequest("90932126|-31949220216199280|90962159",
        jsonStr, "DELIVERY-DB", "SHIPMENT-TABLE");
    jQuery.ajaxSetup({ async: false });
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr,
        "http://api.login2explore.com:5577", "/api/iml");
    alert(JSON.stringify(resultObj));
    jQuery.ajaxSetup({ async: true });
    resetForm();
}
