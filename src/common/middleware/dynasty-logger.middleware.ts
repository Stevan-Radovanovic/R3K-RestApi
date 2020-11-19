import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class DynastyLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('A request has been made regarding Dynasties!')
    next();
  }
}
