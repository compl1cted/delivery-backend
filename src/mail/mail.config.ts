import { MailerOptions } from "@nestjs-modules/mailer";

export const MailConfig: MailerOptions = {
    transport: {
        host: "localhost",
        port: 1025,
        ignoreTLS: true,
        secure: false,
        auth: {
            user: process.env.MAILDEV_INCOMING_USER,
            pass: process.env.MAILDEV_INCOMING_PASS,
        }
    }
}