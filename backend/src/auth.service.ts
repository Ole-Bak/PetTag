import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(name: string, email: string, pass: string) {
    const existing = await this.userRepository.findOne({ where: { email } });
    if (existing) throw new BadRequestException('Email exist');

    const newUser = this.userRepository.create({ name, email, pass });
    return await this.userRepository.save(newUser);
  }

  async login(email: string, pass: string) {
    const user = await this.userRepository.findOne({ where: { email, pass } });
    if (!user) throw new BadRequestException('Incorrect email or password');
    return user;
  }
}
