import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { Client } from 'pg';
import config from './config';

@Injectable()
export class AppService {

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>,
    @Inject('PG') private clientePg: Client
  ) { }

  getHello(): string {
    return `Hello World! ${this.configService.apiKey} `;
  }

  getTask() {
    return new Promise( (resolve,reject)=>{
      this.clientePg.query('select now()', (err, res) => {
        if( err ) reject( err )
        resolve(res)
      })
    });
  }
}
