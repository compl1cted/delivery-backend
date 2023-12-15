import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendMail(to: string, from: string, subject: string, text: string, html?: string) {
        const result = await this.mailerService.sendMail({to, from, subject, text, html});

        return result;
    }
}