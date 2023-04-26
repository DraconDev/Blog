import { Box, Grid } from "@mui/material";
import Container from "@mui/material/Container";

import { MainTitle } from "../components/MainTitle";
import ResponsiveAppBar from "../components/Navbar";
import { Posts } from "../components/Posts";
import { SideBar } from "../components/SideBar";
import PrimaryLayout from "../layout/PrimaryLayout";

function App() {
    return (
        <PrimaryLayout>
            <Container maxWidth="lg" sx={{ display: "flex" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={8}>
                        <MainTitle>Recently Published</MainTitle>
                        <Posts />
                    </Grid>
                    <Grid
                        item
                        sm={4}
                        xs={0}
                        sx={{ display: { xs: "none", sm: "block" } }}
                    >
                        <SideBar />
                    </Grid>
                </Grid>
            </Container>
        </PrimaryLayout>
    );
}

export default App;
