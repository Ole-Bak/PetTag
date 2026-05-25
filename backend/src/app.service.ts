import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PetTag } from './pet-tag.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(PetTag)
    private petTagRepository: Repository<PetTag>,
  ) {}

  async createPetTag(petData: any): Promise<PetTag> {
    const newPet: PetTag = this.petTagRepository.create(petData as PetTag);
    const savedPet = await this.petTagRepository.save(newPet);
    return savedPet as PetTag;
  }

  async getAllTags(): Promise<PetTag[]> {
    return await this.petTagRepository.find();
  }

  async updatePetTag(id: string, petData: any): Promise<PetTag> {
    await this.petTagRepository.update(id, petData);
    const updatedPet = await this.petTagRepository.findOne({
      where: { id: id as any },
    });

    if (!updatedPet) {
      throw new Error(`Pet with id ${id} not found`);
    }
    return updatedPet;
  }

  async deletePetTag(id: string): Promise<void> {
    await this.petTagRepository.delete(id);
  }
}
