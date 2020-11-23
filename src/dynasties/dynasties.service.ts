import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DynastyLoggerMiddleware } from 'src/common/middleware/dynasty-logger.middleware';
import { Dynasty } from 'src/dynasties/interfaces/dynasty.interface';
import { CreateDynastyDTO } from './dto/create-dynasty.dto';
import { Dynasty as DynastyClass, DynastyDocument } from './dynasty.schema';

@Injectable()
export class DynastiesService {
    private dynasties: Dynasty[] = [];

    constructor(@InjectModel(DynastyClass.name) private dynastyModel: Model<DynastyDocument>) {}

    async create(dynasty: Dynasty): Promise<Dynasty> {
        const createdCat = new this.dynastyModel(dynasty);
        return createdCat.save();
    }

    async findAll(): Promise<Dynasty[]> {
        return this.dynastyModel.find().exec();
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
