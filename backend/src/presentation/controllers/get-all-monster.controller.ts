import { Request, Response } from "express";
import { GetAllMonstersUseCase } from "../../application/useCases/get-monsters.use-case";

export class GetAllMonsterController {
    constructor(private getAllMonsterUseCase: GetAllMonstersUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {
            const monster = await this.getAllMonsterUseCase.execute();
            return response.status(201).json(monster);
        } catch (error) {
            return response.status(500).json({ error: (error as Error).message });
        }
    }
}