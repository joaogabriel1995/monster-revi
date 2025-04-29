import { Router } from 'express';
import { MonsterRepositoryPrisma } from '../../infrastructure/repositories/monster-repository.prisma';
import { GetAllMonstersUseCase } from '../../application/useCases/get-monsters.use-case';
import { GetAllMonsterController } from '../controllers/get-all-monster.controller';

const router = Router();
const monsterRepository = new MonsterRepositoryPrisma()
const getAllMonsterUseCase = new GetAllMonstersUseCase(monsterRepository)
const controller = new GetAllMonsterController(getAllMonsterUseCase);

router.get("/", async (request, response, next) => {
    try {
        await controller.handle(request, response);
    } catch (error) {
        next(error);
    }
});

export { router as getAllMonsterRouter };
