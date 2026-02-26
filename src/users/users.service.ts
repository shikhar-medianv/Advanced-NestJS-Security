import { Injectable } from "@nestjs/common";

export interface User {
    name: string;
    age: number;
    id: number
}


@Injectable()
export class UserService {
    private store = new Map<number, User>()

    addUser(user: User) {
        this.store.set(user.id, user)
    }

    getUser(id: number) {
        return this.store.get(id)
    }

    getUsers() {
        return Array.from(this.store).map(([_, user]) => user)
    }

    updateUser(id: number, user: Partial<User>) {
        const existingUser = this.store.get(id)
        if (!existingUser) return

        this.store.set(id, { ...existingUser, ...user })
    }

    deleteUser(id: number) {
        this.store.delete(id)
    }

}