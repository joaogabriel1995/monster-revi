import { ICreateMonsterDTO } from "../../application/dtos/create-monster.dto";
import { IMonsterResponseDTO } from "../../application/dtos/monster-response.dto";
import { IMonsterRepository } from "../../domain/repositories/monster-repository.interface";
import { PrismaService } from "../database/prisma";

export class MonsterRepositoryPrisma implements IMonsterRepository {
    public prisma: PrismaService;
    constructor() {
        this.prisma = PrismaService.getInstance()
    }

    async create(monster: ICreateMonsterDTO): Promise<IMonsterResponseDTO> {
        return this.prisma.monster.create({
            data: monster,
        });
    }
    async getAllMonsters(): Promise<IMonsterResponseDTO[]> {
        return this.prisma.monster.findMany();
    }
}

