import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { IGetAllMonsterResponseDTO } from "../../services/monster.service";


interface MonsterCardProps {
  monster: IGetAllMonsterResponseDTO;
  onSelect?: () => void;
  selected?: boolean;
}

export const MonsterCard: React.FC<MonsterCardProps> = ({
  monster,
  onSelect,
  selected = false,
}) => (
  <Card
    sx={{
      width: 300,
      border: selected ? "2px solid red" : "2px solid transparent",
      transition: "border-color 0.2s",
    }}
  >
    <CardMedia
      component="img"
      height="140"
      image={monster.image_url}
      alt={monster.name}
      sx={{ objectFit: "cover" }}
    />
    <CardContent sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <Typography variant="h6">{monster.name}</Typography>

      <Box display="grid" gridTemplateColumns="1fr 1fr" gap={1}>
        <Typography variant="body2">⚔️ {monster.attack}</Typography>
        <Typography variant="body2">🛡️ {monster.defense}</Typography>
        <Typography variant="body2">❤️ {monster.hp}</Typography>
        <Typography variant="body2">⚡ {monster.speed}</Typography>
      </Box>

      <Button
        fullWidth
        variant={selected ? "contained" : "outlined"}
        color="primary"
        onClick={onSelect}
        sx={{ mt: 1 }}
      >
        {selected ? "Selecionado" : "Selecionar"}
      </Button>
    </CardContent>
  </Card>
);
