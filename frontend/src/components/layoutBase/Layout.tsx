import { Box, Typography } from "@mui/material";
import { AppDrawer } from "../drawer/AppDrawer";

interface LayoutBaseProps {
    children: React.ReactNode;
    title: string;
}

const drawerWidth = 240;

export const LayoutBase = ({ children, title }: LayoutBaseProps) => (
    <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
        <AppDrawer width={drawerWidth} />

        <Box
            component="main"
            sx={{
                flexGrow: 1,
                p: 0,
                m: 0,
                overflow: "auto",
            }}
        >
            <Box
                sx={{
                    padding: 2,
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    zIndex: 10
                }}
            >
                <Typography variant="h3" sx={{ marginLeft: "2.5%" }}>
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    </Box>
);
