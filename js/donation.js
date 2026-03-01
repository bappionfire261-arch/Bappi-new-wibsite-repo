
document.getElementById('donate-btn').addEventListener('click', function (event) {
   event.preventDefault();

    const inputDonation = getInputFieldValueById ('input-donation');
     const donationMoney = getTextValueById('donation-money');
   const priceMoney = getTextValueById('danation-price');
    console.log(priceMoney)


    if(isNaN(inputDonation) ){
        alert('Please enter a valid inputDonation');
        return;
    }
    if(inputDonation > donationMoney){
        alert('Not enough balance!')
        return;
    };
     
    const newBalance = donationMoney - inputDonation;
    document.getElementById('donation-money').innerText = newBalance;

    // set the donation price
    const totalPrice = inputDonation + priceMoney;
    document.getElementById('danation-price').innerText = totalPrice;
    // .............
     const p = document.createElement('p');
   p.innerText = `Donation Added: ${inputDonation} Tk. & Total: ${totalPrice} Tk.`;

   document.getElementById('transaction-history').appendChild(p);
});


