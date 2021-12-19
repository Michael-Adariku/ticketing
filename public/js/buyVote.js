const form = document.getElementById("buyVoteForm");
if (form != null) {
    form.addEventListener("submit", payWithPaystack)
}
console.log("hi from vote buyer");

function payWithPaystack(e) {
    e.preventDefault();
    let email = document.getElementById('voterEmail').value;
    console.log(email);
    let fullname = document.getElementById('fullName').value;
    let price = document.getElementById('price-tag').value;
    console.log(email);
    var handler = PaystackPop.setup({
        key: 'pk_test_5ffe38f9ee18675d674012c004b21fb336d647b6',
        email: email,
        name: fullname,
        amount: price, 
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
            let reference = response.reference;
            // $.post('/tickets/purchaseTicket');
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