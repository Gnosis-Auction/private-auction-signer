import { useState, useEffect, useCallback } from "react";
import axios from "axios";

import { PINATA_JWT } from "../constants";
import { whitelistUrl } from "../api/apiUrls";

interface AddressEntry {
    name: string;
    address: string;
    count: number;
}

const useAuctionWhitelist = (auctionId: string, enabled: boolean) => {
    const [whitelistAddresses, setWhitelistAddresses] = useState<
        { entry: AddressEntry[]; occurrence: number }[]
    >([]);

    const fetchWhiteList = useCallback(async () => {
        const response = await axios.get(whitelistUrl(auctionId), {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${PINATA_JWT}`,
            },
        });
        const rows = response?.data?.rows;
        const entriesWithOccurrence = rows.reduce((acc: any, entry: any) => {
            const occurrence =
                acc.filter(
                    (item: any) =>
                        item.entry.metadata.keyvalues.address ===
                            entry.metadata.keyvalues.address
                ).length + 1;
            acc.push({ entry, occurrence });
            return acc;
        }, []);
        setWhitelistAddresses(entriesWithOccurrence);
    }, [auctionId]);

    useEffect(() => {
        if (!auctionId || !enabled) {
            return;
        }

        fetchWhiteList();
    }, [auctionId, enabled]);

    return { whitelistAddresses, fetchWhiteList };
};

export default useAuctionWhitelist;
