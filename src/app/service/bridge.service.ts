import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Injectable()
export class BridgeService {

    private emitter: EventEmitter<String>;

   constructor() {
     this.emitter = new EventEmitter<string>();

    }

    public sendColor(color : string)
    {
      this.emitter.emit(color);
    }

    public subscribeForColor(mySubscriber : any)
    {
      this.emitter.subscribe(mySubscriber);
    }

}
