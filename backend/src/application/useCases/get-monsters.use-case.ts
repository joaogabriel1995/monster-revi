import { IMonsterRepository } from "../../domain/repositories/monster-repository.interface";

export class GetAllMonstersUseCase {
    constructor(private monsterRepository: IMonsterRepository) {}

    async execute() {
        try {
            const monsters = await this.monsterRepository.getAllMonsters();
            return monsters;
        } catch (error) {
            throw new Error("Error fetching monsters: " + error);
        }
    }
}