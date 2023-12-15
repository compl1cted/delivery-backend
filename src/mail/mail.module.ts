import { Module } from "@nestjs/common";
import { MailerModule } from "@nestjs-modules/mailer";
import { MailConfig } from "./mail.config";
import { MailService } from "./mail.service";

@Module({
    imports: [MailerModule.forRoot(MailConfig)],
    providers: [MailService],
    exports: [MailService]
})
export class MailModule {}