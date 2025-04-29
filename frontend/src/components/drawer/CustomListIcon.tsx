import React from 'react';
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, useTheme } from "@mui/material";
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export interface ICustomListProps {
  icon?: React.ReactNode;
  text?: string;
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const CustomList: React.FC<ICustomListProps> = ({ icon = <PrecisionManufacturingIcon />, text = "", onClick, disabled = false }) => {
  const theme = useTheme();

  return (
    <List
      sx={{
        padding: theme.spacing(0.5),
        margin: theme.spacing(0, 0),
        maxHeight: '100%',
        overflowY: 'hidden',
        overflowX: 'hidden',
        width: '100%',
      }}
    >
      <ListItem
        sx={{
          padding: theme.spacing(0.5),
          margin: theme.spacing(0, 0),
          borderRadius: theme.spacing(1),
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <ListItemButton
          onClick={onClick}
          disabled={disabled ? true : false}
          sx={{
            minHeight: '48px',
            padding: theme.spacing(0, 1),
            display: 'flex',
            alignItems: 'center',

          }}
        >
          <ListItemIcon
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: '40px',
            }}
          >
            {icon}
          </ListItemIcon>

          <ListItemText>
            <Typography variant="h6" sx={{ margin: 0, padding: 0 }}>
              {text}
            </Typography>
          </ListItemText>

        </ListItemButton>
      </ListItem>
    </List>
  );
};
