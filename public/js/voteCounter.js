let button = document.getElementById('checkPrice');




button.addEventListener('click', amountUpdator);

function amountUpdator (e) {
    e.preventDefault();
    let voteNumber = document.getElementById('numberOfVotes').value.trim();
    let updatedPrice = voteNumber * 50;
    
    document.getElementById("price-tag").innerHTML = updatedPrice;
    

    
}