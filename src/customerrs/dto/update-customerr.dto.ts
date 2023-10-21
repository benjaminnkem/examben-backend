import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerrDto } from './create-customerr.dto';

export class UpdateCustomerrDto extends PartialType(CreateCustomerrDto) {}
