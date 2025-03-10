import { PartialType } from '@nestjs/mapped-types';
import { CreateRealtimeDto } from './create-realtime.dto';

export class UpdateRealtimeDto extends PartialType(CreateRealtimeDto) {
  group_id: number;
}
