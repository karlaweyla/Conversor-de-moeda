const convertButton = document.querySelector('.convert-button')
const currencySelect = document.querySelector('.currency-select')

function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert',)
    const currencyValueConverted = document.querySelector('.currency-value')

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 6.2
    const ieneToday = 0.03
    const dolarCanadenseToday = 3.6
    const dolarAustralianoToday = 3.2
    const liraToday = 0.16


    if (currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP',
        }).format(inputCurrencyValue / libraToday)
    }

    if (currencySelect.value == 'iene') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY',
        }).format(inputCurrencyValue / ieneToday)
    }

    if (currencySelect.value == 'dolar-canadense') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-CA', {
            style: 'currency',
            currency: 'CAD',
        }).format(inputCurrencyValue / dolarCanadenseToday)
    }

    if (currencySelect.value == 'dolar-australiano') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-AU', {
            style: 'currency',
            currency: 'AUD',
        }).format(inputCurrencyValue / dolarAustralianoToday)
    }

    if (currencySelect.value == 'lira-turca') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY',
        }).format(inputCurrencyValue / liraToday)
    }



    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputCurrencyValue)
}


function changeCurrency() {
    const currencyName = document.getElementById('currency-name')
    const currencyImage = document.querySelector('.currency-img')

    if (currencySelect.value == 'dolar') {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImage.src = './assets/dolar.png'
    }

    if (currencySelect.value == 'euro') {
        currencyName.innerHTML = 'Euro'
        currencyImage.src = './assets/euro-img.png'
    }

    if (currencySelect.value == 'libra-esterlina') {
        currencyName.innerHTML = 'Libra Esterlina'
        currencyImage.src = './assets/libra-esterlina.png'
    }

    if (currencySelect.value == 'iene') {
        currencyName.innerHTML = 'Iene'
        currencyImage.src = './assets/iene.png'
    }

    if (currencySelect.value == 'dolar-canadense') {
        currencyName.innerHTML = 'Dólar Canadense'
        currencyImage.src = './assets/dolar-canadense.png'
    }

    if (currencySelect.value == 'dolar-australiano') {
        currencyName.innerHTML = 'Dólar Australiano'
        currencyImage.src = './assets/dolar-australiano.png'
    }

    if (currencySelect.value == 'lira-turca') {
        currencyName.innerHTML = 'Lira Turca'
        currencyImage.src = './assets/lira-turca.png'
    }


    

    convertValues()
}


currencySelect.addEventListener('change', changeCurrency)
convertButton.addEventListener('click', convertValues)