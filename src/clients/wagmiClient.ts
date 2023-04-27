import { getDefaultClient } from "connectkit";
import { createClient } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { mainnet, polygon, polygonMumbai } from "wagmi/chains";

const chains = [mainnet, polygon, polygonMumbai];

const client = createClient(
	getDefaultClient({
		appName: "gnosis-auction",
		infuraId: process.env.REACT_APP_INFURA_ID,
		chains,
		connectors: [
			new MetaMaskConnector({ chains }),
			new CoinbaseWalletConnector({
				chains,
				options: {
					appName: "gb-airdrop",
				},
			}),
			new WalletConnectConnector({
				chains,
				options: {
					qrcode: true,
				},
			}),
			new InjectedConnector({
				chains,
				options: {
					name: "Injected",
					shimDisconnect: true,
				},
			}),
		],
	})
);

export default client;