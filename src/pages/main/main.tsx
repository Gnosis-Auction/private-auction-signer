/* eslint-disable no-console */
import React from "react";

import { Container } from "@mui/system";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { Alert, AlertColor, Button, Snackbar } from "@mui/material";
import { useSigner, useNetwork, useAccount } from "wagmi";

import { NavBar } from "../../components/navbar/navbar";
import UserAddressField from "../../components/form/user-address-field/user-address-field";
import Whitelist from "../../components/whitelist";

import { ALLOW_LIST_VERIFIER_CONTRACTS } from "../../constants";
import useAuctionSignerAddress from "../../hooks/useAuctionSignerAddress";
import generateSignatures from "../../utils/generateSignatures";
import uploadSignature from "../../utils/uploadSignature";

import "./main.scss";
import useAuctionWhitelist from "../../hooks/useAuctionWhitelist";

const Main: React.FC = () => {
    const { data: signer } = useSigner();
    const { address } = useAccount();
    const { chain } = useNetwork();
    const [addresses, setAddresses] = React.useState<string[]>([]);
    const [auctionId, setAuctionId] = React.useState<string>("");
    const [snackbar, setSnackbar] = React.useState<{
        open: boolean;
        message: string;
        severity: AlertColor;
    }>({
        open: false,
        message: "",
        severity: "success",
    });
    const { signerAddress } = useAuctionSignerAddress(parseInt(auctionId));
    const isSigner = signerAddress?.toLowerCase() === address?.toLowerCase();
    const { whitelistAddresses: whitelist, fetchWhiteList } =
        useAuctionWhitelist(auctionId, isSigner);

    const onSubmit = async () => {
        if (addresses.length === 0) {
            setSnackbar((state) => ({
                ...state,
                open: true,
                message: "Please enter a minimum of one address",
                severity: "error",
            }));
            return;
        }
        const chainId = chain?.id ?? 1;
        const signatures = await generateSignatures(
            addresses,
            signer,
            auctionId,
            ALLOW_LIST_VERIFIER_CONTRACTS[chainId !== 0 ? chainId : 1]
        );
        await Promise.all(
            signatures.map(async (signature) => {
                const { user, signature: auctioneerSignedMessage } = signature;
                await uploadSignature(
                    `${chainId}`,
                    auctionId,
                    user,
                    auctioneerSignedMessage
                );
            })
        );
        setTimeout(fetchWhiteList, 10000)
    };

    const handleClose = () => {
        setSnackbar((state) => ({
            ...state,
            open: false,
            message: "",
        }));
    };

    const onChangeText = (val: any) => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!val?.nativeEvent?.target?.value) {
            return;
        }
        setAuctionId(val.nativeEvent.target.value);
    };

    const onAddressChange = (...values: any[]) => {
        const options = values[1];
        setAddresses(options);
    };

    return (
        <>
            <Container
                maxWidth={false}
                style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
                <NavBar />
                <Divider variant="middle" />
                <div className="main-container">
                    <TextField
                        id="standard-multiline-flexible"
                        label="Auction ID"
                        multiline
                        maxRows={4}
                        variant="standard"
                        onChange={onChangeText}
                        style={{
                            marginBottom: 20,
                        }}
                    />
                    <UserAddressField onChange={onAddressChange} />
                    <Button
                        disabled={!isSigner}
                        onClick={onSubmit}
                        variant="outlined"
                    >
                        Submit
                    </Button>
                </div>
                {isSigner && <Whitelist whitelistData={whitelist} />}
            </Container>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                open={snackbar.open}
                onClose={handleClose}
                message={snackbar.message}
            >
                <Alert
                    onClose={handleClose}
                    severity={snackbar.severity}
                    sx={{ width: "100%" }}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </>
    );
};

export default Main;
