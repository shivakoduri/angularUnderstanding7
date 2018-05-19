import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
  // providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged =  new EventEmitter<{id:number, newStatus: string}>();

  constructor(private loggerService: LoggingService,
              private accountsService: AccountsService) {

  }

  ngOnInit() {
  }

  onSetTo(status:string){
    this.accountsService.updateStatus(this.id, status);
    // this.loggerService.logToConsole(status);
  }

}
