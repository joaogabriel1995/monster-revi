import { useEffect, useState } from "react";
import { monsterService , IGetAllMonsterResponseDTO} from "../services/monster.service";

export const useMonsters = () => {
  const [monsters, setMonsters] = useState<IGetAllMonsterResponseDTO[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await monsterService.getAll();
        setMonsters(data);
      } catch (error) {
        console.error("Erro ao buscar monstros", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { monsters, loading, setMonsters };
};
