import { ConfigModuleOptions } from '@nestjs/config';
import ApiConfig from './env';

export const AppConfig: ConfigModuleOptions = {
    envFilePath: `env/.${process.env.NODE_ENV}.env`,
    isGlobal: true,
    load: [ApiConfig],
};