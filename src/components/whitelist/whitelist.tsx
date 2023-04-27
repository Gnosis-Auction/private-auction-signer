/* eslint-disable no-console */
import { FC, useState, useMemo } from "react";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { TextField } from "@mui/material";

interface Props {
    whitelistData: any[];
}

const Whitelist: FC<Props> = ({ whitelistData }) => {
    const [searchAddress, setSearchAddress] = useState<string>("");

    const filteredWhitelistData = useMemo(() => {
        if (!searchAddress) {
            return whitelistData;
        }
        return whitelistData.filter((item) => {
            const { keyvalues } = item.entry.metadata;
            return keyvalues.address
                .toLowerCase()
                .includes(searchAddress.toLowerCase());
        });
    }, [whitelistData, searchAddress.length]);

    function renderRow(props: ListChildComponentProps) {
        const { index, style } = props;
        const {
            entry: {
                metadata: { keyvalues },
            },
        } = filteredWhitelistData[index];

        return (
            <ListItem style={style} key={index} component="div" disablePadding>
                <ListItemText primary={keyvalues.address} />
            </ListItem>
        );
    }

    const onChangeText = (val: any) => {
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        if (!val?.nativeEvent?.target?.value) {
            return;
        }
        setSearchAddress(val.nativeEvent.target.value);
    };

    return (
        <div
            style={{
                width: "100%",
                height: 400,
                maxWidth: 700,
                marginLeft: 100,
                marginTop: 20,
            }}
        >
            <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                style={{ marginBottom: 10 }}
            >
                Whitelisted Addresses: {whitelistData?.length || 0}
            </Typography>
            <TextField
                id="standard-multiline-flexible"
                label="🔎 Search address"
                multiline
                maxRows={4}
                variant="outlined"
                onChange={onChangeText}
                style={{
                    marginBottom: 20,
                    width: 600,
                }}
            />
            <FixedSizeList
                height={400}
                width={600}
                itemSize={46}
                itemCount={filteredWhitelistData?.length || 0}
                overscanCount={5}
            >
                {renderRow}
            </FixedSizeList>
        </div>
    );
};

export default Whitelist;
