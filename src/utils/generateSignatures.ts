/* eslint-disable no-console */
import { utils } from "ethers";

function domain(chainId: number, verifyingContract: any) {
    return {
        name: "AccessManager",
        version: "v1",
        chainId,
        verifyingContract,
    };
}

/**
 * This is an async function that generates signatures for a list of addresses using a user signer,
 * auction ID, and allow list contract address.
 * @param {string[]} addresses - An array of Ethereum addresses for which signatures need to be
 * generated.
 * @param {any} userSigner - The `userSigner` parameter is an object that represents the user's
 * Ethereum account and is used to sign messages and transactions on their behalf. It is likely an
 * instance of a Web3 provider or a custom signer implementation.
 * @param {string} auctionId - The `auctionId` parameter is a string representing the unique identifier
 * of an auction. It is used in the generation of signatures for a list of addresses, which can then be
 * used to allow those addresses to participate in the auction.
 * @param {string} allowListContractAddress - `allowListContractAddress` is a string parameter that
 * represents the address of the smart contract that manages the whitelist of addresses allowed to
 * participate in an auction. This function uses this address to generate the domain separator for the
 * EIP-712 signature.
 * @returns a Promise that resolves to an array of objects containing the user address and their
 * corresponding signature. If the input array of addresses is empty, an empty array is returned.
 */
async function generateSignatures(
    addresses: string[],
    userSigner: any,
    auctionId: string,
    allowListContractAddress: string
) {
    if (addresses?.length === 0) return [];
    const chainId = await userSigner.getChainId();

    const contractDomain = domain(chainId, allowListContractAddress);

    const signatures: { user: string; signature: string }[] = [];
    await Promise.all(
        addresses.map(async (address) => {
            const auctioneerMessage = utils.keccak256(
                utils.defaultAbiCoder.encode(
                    ["bytes32", "address", "uint256"],
                    [
                        utils._TypedDataEncoder.hashDomain(contractDomain),
                        address,
                        auctionId,
                    ]
                )
            );
            try {
                const auctioneerSignature = await userSigner.signMessage(
                    utils.arrayify(auctioneerMessage)
                );
                const sig = utils.splitSignature(auctioneerSignature);
                const auctioneerSignatureEncoded = utils.defaultAbiCoder.encode(
                    ["uint8", "bytes32", "bytes32"],
                    [sig.v, sig.r, sig.s]
                );
                signatures.push({
                    user: address,
                    signature: auctioneerSignatureEncoded,
                });
            } catch (e) {
                console.log(e);
            }
        })
    );

    return signatures;
}

export default generateSignatures;
