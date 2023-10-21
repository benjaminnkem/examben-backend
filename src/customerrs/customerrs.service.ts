import { Injectable } from '@nestjs/common';
import { CreateCustomerrDto } from './dto/create-customerr.dto';
import { UpdateCustomerrDto } from './dto/update-customerr.dto';

@Injectable()
export class CustomerrsService {
  create(createCustomerrDto: CreateCustomerrDto) {
    return 'This action adds a new customerr';
  }

  findAll() {
    return `This action returns all customerrs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} customerr`;
  }

  update(id: number, updateCustomerrDto: UpdateCustomerrDto) {
    return `This action updates a #${id} customerr`;
  }

  remove(id: number) {
    return `This action removes a #${id} customerr`;
  }
}
