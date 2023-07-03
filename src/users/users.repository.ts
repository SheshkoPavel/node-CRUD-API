import { EventEmitter } from 'node:events';
import * as uuid from 'uuid';
import cluster from 'cluster';
import { User } from './user.model';

const UNEXPECTED_ERROR = 'Unexpected error, try again later';

export class UsersRepository extends EventEmitter {
    private readonly users: User[] = [];

    private async requestData(obj: any): Promise<any> {
        return new Promise((resolve) => {
            const result = process.send(obj, () => {
                this.once(obj.cmd, (msg) => {
                    resolve(msg['data']);
                });
            });
            if (!result) {
                throw new Error(UNEXPECTED_ERROR);
            }
        });
    }

    async create(input: Partial<User>): Promise<User> {
        if (cluster.isWorker) {
            const obj = {
                cmd: 'create',
                data: [input]
            };

            return this.requestData(obj);
        } else {
            return new Promise((resolve) => {
                const user = Object.assign(new User(), { id: uuid.v4(), ...input });

                this.users.push(user);
                resolve(user);
            });
        }
    }

    async find(): Promise<User[]> {
        if (cluster.isWorker) {
            const obj: any = {
                cmd: 'find',
                data: []
            };

            return this.requestData(obj);
        } else {
            return new Promise((resolve) => {
                resolve(this.users);
            });
        }
    }

    async findOne(id: string): Promise<User> {
        if (cluster.isWorker) {
            const obj = {
                cmd: 'findOne',
                data: [id]
            };
            return this.requestData(obj);
        } else {
            return new Promise((resolve) => {
                resolve(this.users.filter((item) => item.id === id)[0]);
            });
        }
    }


}
