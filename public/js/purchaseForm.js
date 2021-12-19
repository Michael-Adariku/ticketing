const form = document.getElementById("form");
if (form != null) {
    form.addEventListener("submit", payWithPaystack)
}

function payWithPaystack(e) {
    e.preventDefault();
    let email = document.getElementById('email').value;
    let fullname = document.getElementById('fullName').value;
    // let customerPhoneNumber = document.getElementById('phoneNumber').value;
    console.log(email);
    var handler = PaystackPop.setup({
        key: 'pk_test_5ffe38f9ee18675d674012c004b21fb336d647b6',
        email: email,
        name: fullname,
        amount: 200000 , 
        currency: "NGN",
        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
        metadata: {
            custom_fields: [{
                display_name: fullname,
                variable_name: fullname,
                value: "+2348012345678"
            }]
        },
        callback: function (response) {
            console.log(response)
            // this is the first method
            let reference = response.reference;
            $.post('/tickets/purchaseTicket');


            // window.location = "http://localhost:2020/payment/verify/?reference=" + response.reference;
                alert('success. transaction ref is ' + reference);
              },
        onClose: function () {
            alert('window closed');
        }
    });
    handler.openIframe();
}

// module.exports = payWithPaystack;