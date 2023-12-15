import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const DatabaseProvider = [
    {
        inject: [ConfigService],
        provide: 'DATA_SOURCE',
        useFactory: async (configService: ConfigService) => {
            const dataSource = new DataSource({
                type: configService.get<any>('config.database.type'),
                host: configService.get<string>('config.database.host'),
                port: configService.get<number>('config.database.port'),
                username: configService.get<string>('config.database.username'),
                password: configService.get<string>('config.database.password'),
                database: configService.get<string>('config.database.name'),
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
            });

            return dataSource.initialize();
        },
    },
];
