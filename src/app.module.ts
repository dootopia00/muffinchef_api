import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ormConfig } from './configs/orm.config';
import { NotepadModule } from './notepad/notepad.module';

console.log('process.env.DB_HOST : ', process.env.DB_HOST)

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.product',
      // ignoreEnvFile: process.env.NODE_ENV === 'prod', // prod할 때는 ec2 
    }), // env 설정파일 읽기
    TypeOrmModule.forRootAsync({ useFactory: ormConfig }),
    NotepadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
