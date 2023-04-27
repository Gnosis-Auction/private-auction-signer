import { FC } from "react";
import { Autocomplete, TextField } from "@mui/material";

interface Props {
    onChange: (val: any) => void;
}

const UserAddressField: FC<Props> = ({ onChange }) => {
    return (
        <>
            <div style={{ marginBottom: 20 }}>
                <p>Enter User Addresses</p>
                <Autocomplete
                    multiple
                    id="tags-outlined"
                    freeSolo
                    options={[]}
                    defaultValue={[]}
                    onChange={onChange}
                    filterSelectedOptions
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="User Addresses"
                            placeholder="User Addresses"
                        />
                    )}
                />
            </div>
        </>
    );
}

export default UserAddressField;
