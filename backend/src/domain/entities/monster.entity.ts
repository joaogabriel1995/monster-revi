import { v4 as uuid } from "uuid"


export class Monster {
    private readonly  id: string
    public name: string
    public attack: number
    public defense: number
    public hp: number
    public speed: number
    public image_url: string

    constructor(props: Omit<Monster, "id">, id?: string) {
        Object.assign(this, props)
        if (!id) {
            this.id = uuid()
        }
    }
}