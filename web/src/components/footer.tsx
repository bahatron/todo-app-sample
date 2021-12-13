import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link to="/">Your Website</Link> {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
