import { IMonsterResponseDTO } from "../dtos/monster-response.dto";

export class BattleMonsterUseCase {
    constructor() { }

    async execute(
        monsters: IMonsterResponseDTO[] | null
    ): Promise<IMonsterResponseDTO> {
        try {
            if (!monsters || monsters.length !== 2) {
                throw new Error("Two monsters are required for the battle.");
            }
            const [rawA, rawB] = monsters;
            const a = { ...rawA };
            const b = { ...rawB };

            let attacker = a;
            let defender = b;
            if (
                b.speed > a.speed ||
                (b.speed === a.speed && b.attack > a.attack)
            ) {
                attacker = b;
                defender = a;
            }
            while (true) {
                const damage = Math.max(attacker.attack - defender.defense, 1);
                defender.hp -= damage;
                if (defender.hp <= 0) {
                    return attacker;
                }

                [attacker, defender] = [defender, attacker];
            }
        } catch (err) {
            throw new Error(`Erro ao processar batalha: ${err}`);
        }
    }
}
