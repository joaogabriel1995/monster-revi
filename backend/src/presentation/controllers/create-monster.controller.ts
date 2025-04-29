import {  Request, Response } from "express";
import { CreateMonsterUseCase } from "../../application/useCases/create-monster.use-case";

export class CreateMonsterController {
    constructor(private createMonsterUseCase: CreateMonsterUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, attack, defense, hp, speed, image_url } = request.body;

        try {
            const monster = await this.createMonsterUseCase.execute({
                name,
                attack,
                defense,
                hp,
                speed,
                image_url
            });
            return response.status(201).json(monster);
        } catch (error) {
            return response.status(500).json({ error: (error as Error).message });
        }
    }
}