import { IMonsterRepository } from "../../domain/repositories/monster-repository.interface"
import { ICreateMonsterDTO } from "../dtos/create-monster.dto"
import { IMonsterResponseDTO } from "../dtos/monster-response.dto"

export class CreateMonsterUseCase {
    constructor(private monsterRepository: IMonsterRepository) { }

    async execute(monsterData: ICreateMonsterDTO): Promise<IMonsterResponseDTO> {
        try {
            const monster = await this.monsterRepository.create(monsterData)
            return monster
            
        } catch (error) {
            throw new Error("Error creating monster: " + error)
        }
    }
}