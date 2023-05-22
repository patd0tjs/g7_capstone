import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { clearSessionData } from "../utils/session";

const Logout = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        clearSessionData(); // Clear any session data as needed.
        navigate("/login"); // Redirect the user back to the login page after logging out.
    };

    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            height="100vh"
            backgroundColor="#fcfcfc"
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                gap={2}
            >
                <Typography variant="h4" color="#404040">
                    You have been logged out
                </Typography>
                <Button
                    onClick={handleLogout}
                    variant="contained"
                    sx={{ padding: "10px" }}
                >
                    Return to Login
                </Button>
            </Box>
        </Box>
    );
};

export default Logout;