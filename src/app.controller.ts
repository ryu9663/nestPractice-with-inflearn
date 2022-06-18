import { Body, Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello/:id/:name') //데코레이터, 함수나 클래스에 기능을 첨가하여 재사용성 극대화
  getHello(@Req() req: Request, @Body() Body, @Param() param): string {
    console.log(Body);
    console.log(param);
    return this.appService.getHello();
  }
}

//익스프레스에서 라우트와 서비스를 분리하듯,
// 유지보수를 위해 컨트롤러와 서비스를 분리.
// 네스트는 모듈단위
