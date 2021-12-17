let button = document.getElementById('checkPrice');
let phoneNumber = document.getElementById('phoneNumber');



button.addEventListener('click', amountUpdator);

function amountUpdator () {
    
    let voteNumber = document.getElementById('numberOfVotes').value.trim();
    let updatePrice = voteNumber * 100;
    
    document.getElementById("price-tag").innerHTML = updatePrice;
    

    
}