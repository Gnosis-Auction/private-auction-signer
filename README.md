## Contents

- [Private Auction Signer](#private-auction-signer)
  - [Development Setup](#development-setup)
  - [Usage](#usage)
  - [Links](#links)
  - [License](#license)

# Private Auction Signer

This repository holds the code for the Private Auction Signer.
The Private Auction Signer is a tool for auctioneers who have launched private auctions and want to whitelist addresses for bidding.


## Development Setup

* Clone the repo
```bash
git clone https://github.com/Gnosis-Auction/private-auction-signer.git`
```

* Set up the environment variables.
Create a new file called `.env` in the root of the project.
    ```bash
    touch .env
    ```
    Check `.env.example` for the required environment variables.
* Install dependencies
  * npm
    ```bash
    npm install
    ```
  * yarn
    ```bash
    yarn
* Run the server
  * npm
    ```bash
    npm run start
    ```
  * yarn
    ```bash
    yarn start
    ```
* The server will be running on `http://localhost:3000` by default.

## Usage
1. Connect your wallet to the app.
![](https://user-images.githubusercontent.com/131258998/234788688-e680f866-cec8-42d2-b445-6b0327fbbee3.png)
2. Enter the auction ID.
![](https://user-images.githubusercontent.com/131258998/234788892-3b8535c5-92ba-4a7e-95fd-bd7b31bb56d2.png)
3. If the connected wallet address matches with the auctioneer address, the Submit button will be enabled.
![](https://user-images.githubusercontent.com/131258998/234789730-f3b9b861-958f-47c6-b564-76c37a176e48.png)
4. Enter the address you want to whitelist and,
![](https://user-images.githubusercontent.com/131258998/234790455-bc5fa148-8901-493d-ae02-f56a7d6801ac.png)
5. Click on the Submit button.

Note: If the auctioneers address matches the wallet address, the whitelisted addresses will show up below.
![](https://user-images.githubusercontent.com/131258998/234790798-8611e2cd-7360-4ddd-a191-a314320520b6.png)

## Links
* [Auction Main Site](https://gnosis-auction.eth.limo/#/start)
* [Auction Code](https://github.com/Gnosis-Auction/auction-ux)
* [Auction Contracts](https://github.com/Gnosis-Auction/auction-contracts)
* [Auction Subgraph](https://github.com/Gnosis-Auction/auction-graph)
* [Initiate Auction Code](https://github.com/Gnosis-Auction/initiate-auction-ux)


## License

This program is free software: you can redistribute it and / or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.

Copyright © 2021, Gnosis limited.


Released under GNU General Public License v3.0