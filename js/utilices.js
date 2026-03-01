function getInputFieldValueById (id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
};

function getTextValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
};

function showSectionById (id){
    // all hide the section
    document.getElementById('header-container').classList.add('hidden');
    document.getElementById('transaction-history').classList.add ('hidden');

    // 
    document.getElementById(id).classList.remove ('hidden');
}