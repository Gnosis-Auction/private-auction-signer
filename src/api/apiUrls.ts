import { PINATA_BASE_URL } from "../constants";

export const whitelistUrl = (auctionId: string) =>
    `${PINATA_BASE_URL}data/pinList?status=pinned&metadata[keyvalues][auctionId]={"value":"${auctionId}","op":"eq"}&pageLimit=1000`;

export const pinJsonUrl = `${PINATA_BASE_URL}pinning/pinJSONToIPFS`;
export const unpinUrl = (hash: string) => `${PINATA_BASE_URL}pinning/unpin/${hash}`;
