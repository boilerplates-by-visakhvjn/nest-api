import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as SendGrid from '@sendgrid/mail';
import { MailDataRequired } from '@sendgrid/mail';

@Injectable()
export class SendgridService {
  constructor(private configService: ConfigService) {
    SendGrid.setApiKey(this.configService.get('SENDGRID_API_KEY'));
  }

  async send(mail: MailDataRequired): Promise<void> {
    try {
      const response = await SendGrid.send(mail);
      console.log(response);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
