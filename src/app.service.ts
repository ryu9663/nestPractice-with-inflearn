import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    //비즈니스 로직
    //res.send가 리턴임
    //리턴값을 컨트롤러가 받고
    //컨트롤러에서 모듈로 들어가고
    //모듈에서 main.ts의 NestFactory에 들어간다.

    return 'Hello World!';
  }
}
