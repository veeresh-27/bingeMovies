import { TextField } from "@material-ui/core";
import { useState } from "react";

const Search = () => {
    const [type, setType] = useState(0);
    return (
        <div>
            <TextField
                style={{ flex: 1 }}
                className="searchBox"
                label="Search"
                variant="outlined"
              //  onChange={(e) => setType(e.target.value)}
            />
        </div>
    );
}