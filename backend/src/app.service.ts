import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getApiInfo() {
    return {
      name: 'UPC PROJECT API',
      version: '1.0.0',
      endpoints: ['/api', '/api/health'],
    };
  }

  getHealth() {
    return {
      status: 'ok',
      message: 'El backend NestJS está funcionando correctamente.',
      timestamp: new Date().toISOString(),
    };
  }
}

