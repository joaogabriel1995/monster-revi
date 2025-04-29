import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { useState } from "react";
import { useMonsters } from "../hooks/useMonsters";
import { LayoutBase } from "../components/layoutBase/Layout";
import { battleService, IBattleMonsterInput } from "../services/battle.service";
import { MonsterCard } from "../components/card/Card";

export const BattlePage: React.FC = () => {
  const { monsters, loading } = useMonsters();
  const [selectedMonsters, setSelectedMonsters] = useState<IBattleMonsterInput[]>([]);
  const [battleWinner, setBattleWinner] = useState<IBattleMonsterInput | null>(null);

  const toggleSelectMonster = (monster: IBattleMonsterInput) => {
    setSelectedMonsters(prev => {
      if (prev.some(m => m.id === monster.id)) {
        return prev.filter(m => m.id !== monster.id);
      }
      if (prev.length < 2) {
        return [...prev, monster];
      }
      return prev;
    });
  };

  const onClickBattle = async () => {
    if (selectedMonsters.length !== 2) return;
    const winner = await battleService.battle(selectedMonsters);
    setBattleWinner(winner);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
        <CircularProgress />
      </Box>
    );
  }

  const visibleMonsters =
    selectedMonsters.length === 2 ? selectedMonsters : monsters;

  return (
    <LayoutBase title="Batalha de monstros">
      {battleWinner ? (
        <Box display="flex" flexDirection="column" alignItems="center" p={4}>
          <Typography variant="h3" gutterBottom>
            O Grande Vencedor foi:
          </Typography>
          <MonsterCard monster={battleWinner} selected />
        </Box>
      ) : (
        <>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
            {visibleMonsters.map(m => (
              <MonsterCard
                key={m.id}
                monster={m}
                onSelect={() => toggleSelectMonster(m)}
                selected={selectedMonsters.some(x => x.id === m.id)}
              />
            ))}
          </Box>

          <Box mt={3} textAlign="center">
            <Button
              variant="contained"
              disabled={selectedMonsters.length !== 2}
              onClick={onClickBattle}
            >
              Batalhar
            </Button>
          </Box>
        </>
      )}
    </LayoutBase>
  );
};
