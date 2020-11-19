import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { DynastiesModule } from './dynasties/dynasties.module';
import { DynastyLoggerMiddleware } from './common/middleware/dynasty-logger.middleware';
import { DynastiesController } from './dynasties/dynasties.controller';

@Module({
  imports: [DynastiesModule],
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
