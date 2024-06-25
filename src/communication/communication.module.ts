import { Module } from '@nestjs/common';
import { EmailService } from './email/email.service';
import { ConfigModule } from '@nestjs/config';
import { ExternalModule } from 'src/external/external.module';

@Module({
  imports: [ConfigModule, ExternalModule],
  providers: [EmailService],
  exports: [EmailService],
})
export class CommunicationModule {}
