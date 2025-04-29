import { Router } from "express";
import { monsterRoutes } from "./monster.router";
import { getAllMonsterRouter } from "./get-all-monster.router";
import { battleMonsterRouter } from "./battle-monster.router";

const router = Router();

router.use("/monster", monsterRoutes)
router.use("/monster", getAllMonsterRouter)
router.use("/battle", battleMonsterRouter)


export { router };