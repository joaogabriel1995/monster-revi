// src/services/transcriptionService.ts
import { api } from './api';

export interface ICreateMonster {
  name: string
  attack: number
  defense: number
  hp: number
  speed: number
  image_url: string
}

export interface IGetAllMonsterResponseDTO {
  id: number
  name: string
  attack: number
  defense: number
  hp: number
  speed: number
  image_url: string
}

export const monsterService = {
  add: async (
    props: ICreateMonster
  ) => {
    const response = await api.post('/monster', props);
    return response.data;
  },
  getAll: async (): Promise<IGetAllMonsterResponseDTO[]> => {
    const response = await api.get('/monster');
    return response.data;
  }
};
