import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),

    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        password: process.env.DB_PASSWORD,
        port: Number(process.env.DB_PORT),
        username: process.env.DB_USERNAME,
        options: {
          encrypt: false,
          requestTimeout: 60 * 1000,
        },
        entities: [join(__dirname, '**', '*.entity.{ts,js}')],
        synchronize: false,
        logging: true,
      }),
    }),

    UserModule,
  ],

})
export class AppModule { }
