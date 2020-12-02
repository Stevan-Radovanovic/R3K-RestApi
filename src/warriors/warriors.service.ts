import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ChangeWeaponDto } from './dto/change-weapon.dto';
import { CreateWarriorDto } from './dto/create-warrior.dto';
import { UpdateWarriorDto } from './dto/update-warrior.dto';
import { Warrior, WarriorDocument } from './warriors.schema';

@Injectable()
export class WarriorsService {

  constructor(@InjectModel(Warrior.name) private warriorModel: Model<WarriorDocument>) { }

  async create(warrior: CreateWarriorDto): Promise<Warrior> {
    const createdDynasty = new this.warriorModel(warrior);
    return createdDynasty.save();
  }

  async findAll(): Promise<Warrior[]> {
    return this.warriorModel.find().exec();
  }

  async findOne(id: string): Promise<Warrior> {
    return this.warriorModel.findById(id).exec();
  }

  async update(id: string, warrior: UpdateWarriorDto): Promise<Warrior> {
    return this.warriorModel.findByIdAndUpdate(id, warrior).setOptions({ new: true }).exec();
  }

  async remove(id: string): Promise<Warrior> {
    return this.warriorModel.findByIdAndDelete(id).exec();
  }

}
