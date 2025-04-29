import { Box, Drawer } from "@mui/material";
import { CustomList, ICustomListProps } from "./CustomListIcon";
import { Add } from "@mui/icons-material";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface AppDrawerProps {
    width: number;
}


export const AppDrawer = ({ width }: AppDrawerProps) => {
    const navigate = useNavigate();

    const handleClick = (navigate: NavigateFunction, to: string) => {
        navigate(to);
    };

    const CustomListItens: ICustomListProps[] = [
        { icon: <Add />, text: "Criar Monstro", onClick: () => handleClick(navigate, '/monster') },
        { icon: <Add />, text: "Batalha de monstros", onClick: () => handleClick(navigate, '/battle') },
    ];

    return (

        <Drawer
            variant="permanent"
            open
            anchor="left"
            sx={{
                width,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width,
                    boxSizing: "border-box",
                    p: 0,
                    m: 0,
                    display: "grid",
                    gridTemplateRows: "1fr 2fr 1fr",
                    height: "100vh",
                },
            }}
        >
            <Box display="flex" alignItems="center" justifyContent="center">
            </Box>
            <Box display="flex" width={"100%"} flexDirection={"column"} alignItems="center" >
                {CustomListItens.map((Item, index) =>
                    <CustomList
                        key={index}
                        icon={Item.icon}
                        text={Item.text}
                        onClick={Item.onClick}
                    />
                )}
            </Box>
            <Box display="flex" alignItems="center" justifyContent="center">
            </Box>
        </Drawer>
    );
}