import { useQuery } from "@apollo/client";

import GET_SIGNER from "../queries/getSigner";

const useAuctionSignerAddress = (id?: number) => {
    const { data, loading, error } = useQuery(GET_SIGNER, {
        variables: { id },
        skip: (id || 0) < 1,
    });

    return {
        signerAddress: getSigner(data?.auctionDetail?.allowListSigner),
        loading,
        error,
    };
};

function getSigner(allowListSigner?: string) {
    if (allowListSigner && allowListSigner.length == 66) {
        return `0x${allowListSigner.substring(26)}`;
    }
}

export default useAuctionSignerAddress;
