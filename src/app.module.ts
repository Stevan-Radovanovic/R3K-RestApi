import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DynastiesModule } from './dynasties/dynasties.module';
import { DynastyLoggerMiddleware } from './common/middleware/dynasty-logger.middleware';
import { DynastiesController } from './dynasties/dynasties.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { WarriorsModule } from './warriors/warriors.module';

@Module({
  imports: [DynastiesModule,
    MongooseModule.forRoot('mongodb+srv://stevan:Stevan.1@tickitcluster-trhkx.mongodb.net/warriors?retryWrites=true&w=majority',
      { useNewUrlParser: true }),
    WarriorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(DynastyLoggerMiddleware)
      .forRoutes(DynastiesController);
  }
}
