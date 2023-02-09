fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cdogecoin%2Cyearn-finance%2Clink&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true')
    .then(res => res.json())
    .then(json => {

        const container = document.querySelector('.container');
        const coins = Object.getOwnPropertyNames(json);

        for (let coin of coins) {

            const coinInfo = json[`${coin}`];
            const price = coinInfo.usd.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            const change = coinInfo.usd_24h_change.toFixed(2)+ '%';


            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-name">
                        <span class="currency">${coin} $${price} (${change})</span>
                    </div>
                </div>
            `;

        }

    });

