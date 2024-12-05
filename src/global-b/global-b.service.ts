import { Injectable } from '@nestjs/common';
import { CreateGlobalBDto } from './dto/create-global-b.dto';
import { UpdateGlobalBDto } from './dto/update-global-b.dto';
import { GlobalAService } from 'src/global-a/global-a.service';

@Injectable()
export class GlobalBService {
  constructor(private globalAService: GlobalAService) {}

  create(createGlobalBDto: CreateGlobalBDto) {
    return 'This action adds a new globalB';
  }

  findAll() {
    return `This action returns all globalB` + this.globalAService.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} globalB`;
  }

  update(id: number, updateGlobalBDto: UpdateGlobalBDto) {
    return `This action updates a #${id} globalB`;
  }

  remove(id: number) {
    return `This action removes a #${id} globalB`;
  }
}
