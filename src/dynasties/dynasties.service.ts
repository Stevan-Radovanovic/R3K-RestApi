import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dynasty } from 'src/dynasties/interfaces/dynasty.interface';
import { Dynasty as DynastyClass, DynastyDocument } from './dynasty.schema';

@Injectable()
export class DynastiesService {
    private dynasties: Dynasty[] = [];

    constructor(@InjectModel(DynastyClass.name) private dynastyModel: Model<DynastyDocument>) {}

    async create(dynasty: Dynasty): Promise<Dynasty> {
        const createdDynasty = new this.dynastyModel(dynasty);
        return createdDynasty.save();
    }

    async findAll(): Promise<Dynasty[]> {
        return this.dynastyModel.find().exec();
    }

   async update(id: string, dynasty: Dynasty): Promise<Dynasty> {
        return this.dynastyModel.findByIdAndUpdate(id,dynasty).setOptions({new: true}).exec();
    }

    delete(id: string) {
        this.dynasties = this.dynasties.filter((dynasty) => { });
    }

    find(id: string): Dynasty {
        const index = this.dynasties.findIndex((dynasty) => { });
        return this.dynasties[index];
    }
}
