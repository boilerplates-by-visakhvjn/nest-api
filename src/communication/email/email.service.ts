import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MailDataRequired } from '@sendgrid/mail';
import { SendgridService } from 'src/external/sendgrid/sendgrid.service';

@Injectable()
export class EmailService {
  constructor(
    private sendGridService: SendgridService,
    private configService: ConfigService,
  ) {}

  async sendEmail(to: string, subject: string, body: string): Promise<void> {
    const mail: MailDataRequired = {
      to,
      from: this.configService.get('EMAIL_FROM_ADDRESS'),
      subject,
      content: [{ type: 'text/plain', value: body }],
    };

    await this.sendGridService.send(mail);
  }

  async sendEmailWithTemplate(
    to: string,
    subject: string,
    body: object,
    templateId: string,
  ) {
    const mail: MailDataRequired = {
      to,
      from: this.configService.get('EMAIL_FROM_ADDRESS'),
      templateId,
      dynamicTemplateData: { body, subject },
    };

    await this.sendGridService.send(mail);
  }
}
