import { PartialType } from '@nestjs/mapped-types';
import { CreateGlobalBDto } from './create-global-b.dto';

export class UpdateGlobalBDto extends PartialType(CreateGlobalBDto) {}
