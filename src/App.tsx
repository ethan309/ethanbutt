import { Box, Grid } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { pages } from "./pages";
import NotFound from "./components/NotFound";
import Home from "./components/Home";

export const App = () => (
    <Box textAlign="center" fontSize="xl">
        <Router>
            <Grid minH="100vh" py={3} px={9}>
                <Routes>
                    {pages.map((page) => (
                        <Route
                            key={page.link}
                            path={page.link}
                            element={page.element}
                        />
                    ))}
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Grid>
        </Router>
    </Box>
);
