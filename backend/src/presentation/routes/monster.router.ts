import { Router } from 'express';
import { CreateMonsterController } from '../controllers/create-monster.controller';
import { CreateMonsterUseCase } from '../../application/useCases/create-monster.use-case';
import { MonsterRepositoryPrisma } from '../../infrastructure/repositories/monster-repository.prisma';

const router = Router();
const monsterRepository = new MonsterRepositoryPrisma()
const createMonsterUseCase = new CreateMonsterUseCase(monsterRepository)
const controller = new CreateMonsterController(createMonsterUseCase);

router.post("/", async (request, response, next) => {
    try {
        await controller.handle(request, response);
    } catch (error) {
        next(error);
    }
});

export { router as monsterRoutes };
