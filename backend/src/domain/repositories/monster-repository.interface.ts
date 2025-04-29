import { ICreateMonsterDTO } from "../../application/dtos/create-monster.dto";
import { IMonsterResponseDTO } from "../../application/dtos/monster-response.dto";

export interface IMonsterRepository {
    create(monster: ICreateMonsterDTO): Promise<IMonsterResponseDTO> 
    getAllMonsters(): Promise<IMonsterResponseDTO[]>
    
}

