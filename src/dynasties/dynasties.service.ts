import { Injectable } from '@nestjs/common';
import { Dynasty } from 'src/interfaces/dynasty.interface';

@Injectable()
export class DynastiesService {
    private dynasties: Dynasty[] = [];

    create(dynasty: Dynasty) {
        this.dynasties.push(dynasty);
    }

    findAll(): Dynasty[] {
        return this.dynasties;
    }

    update(id: string, dynasty: Dynasty) {
        const index = this.dynasties.findIndex((dynasty) => { });
        this.dynasties[index] = dynasty;
    }

    delete(id: string) {
        this.dynasties = this.dynasties.filter((dynasty) => { });
    }

    find(id: string): Dynasty {
        const index = this.dynasties.findIndex((dynasty) => { });
        return this.dynasties[index];
    }
}
