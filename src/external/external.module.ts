import { Module } from '@nestjs/common';
import { SendgridService } from './sendgrid/sendgrid.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  providers: [SendgridService],
  exports: [SendgridService],
})
export class ExternalModule {}
