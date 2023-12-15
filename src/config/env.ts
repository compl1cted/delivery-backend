import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
    domain: process.env.APP_DOMAIN,
    port: process.env.APP_PORT,
    front_url: process.env.FRONT_URL,
    cookie_secret: process.env.COOKIE_SECRET,
    jwt: {
        access_secret: process.env.JWT_ACCESS_SECRET,
        refresh_secret: process.env.JWT_REFRESH_SECRET,
    },
    database: {
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        name: process.env.DB_NAME,
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        type: process.env.DB_DIALECT,
        autoLoadModels: true,
        synchronize: true, //Turn off in production
    },
    steam: {
        api_key: process.env.STEAM_API_KEY
    },
    csgoserver: {
        domain: process.env.CSGOSERVER_DOMAIN,
        username: process.env.CSGOSERVER_USERNAME,
        password: process.env.CSGOSERVER_PASSWORD,
        matchroom: process.env.CSGOSERVER_MATCHROOM,
        id: process.env.CSGOSERVER_ID,
    },
}));
