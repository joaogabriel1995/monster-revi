import { Request, Response } from "express";
import { IMonsterResponseDTO } from "../../application/dtos/monster-response.dto";
import { BattleMonsterUseCase } from "../../application/useCases/battle-monster.use-case";

export class BattleMonsterController {

    constructor(private battleMonsterUseCase: BattleMonsterUseCase) { }
    async handle(request: Request, response: Response){
        try {
            const data = request.body as IMonsterResponseDTO[] | null;
            const win = await this.battleMonsterUseCase.execute(data)
            return response.status(200).json(win);
        } catch (error) {
            return response.status(500).json({ error: (error as Error).message });
        }
    }
}