import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import React, { ReactNode } from "react";
import { Accordion, Box, BottomNavigation } from "@mui/material";
import NavBar from "../components/Navbar";

// function PrimaryLayout({ children }: { children: ReactNode }) {
// 	return (
// 		<Box sx={{ bgcolor: "#ECF2FF" }}>
// 			<NavBar />
// 			{children}
// 		</Box>
// 	);
// }

function PrimaryLayout({ children }: { children: ReactNode }) {
    return (
        <Box>
            <NavBar />
            <Box sx={{ mt: 13 }}>{children}</Box>
        </Box>
    );
}
export default PrimaryLayout;
