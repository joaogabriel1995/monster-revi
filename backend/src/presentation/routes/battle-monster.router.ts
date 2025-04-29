import { Router } from 'express';
import { BattleMonsterUseCase } from '../../application/useCases/battle-monster.use-case';
import { BattleMonsterController } from '../controllers/battle-monster.controller';

const router = Router();
const getAllMonsterUseCase = new BattleMonsterUseCase()
const controller = new BattleMonsterController(getAllMonsterUseCase);

router.post("/", async (request, response, next) => {
    try {
        await controller.handle(request, response);
    } catch (error) {
        next(error);
    }
});

export { router as battleMonsterRouter };
