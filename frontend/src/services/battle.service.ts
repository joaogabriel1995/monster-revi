// src/services/transcriptionService.ts
import { api } from './api';

export interface IBattleMonsterInput {
  id: number
  name: string
  attack: number
  defense: number
  hp: number
  speed: number
  image_url: string
}


export const battleService = {
  battle: async (props: IBattleMonsterInput[] | null) => {
    const response = await api.post('/battle', props );
    return response.data;
  }
};
