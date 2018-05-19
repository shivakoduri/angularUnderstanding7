import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggerService: LoggingService,
              private accountsService: AccountsService) {

  }

  ngOnInit() {
  }

  onCreateAccount(accountName: string, accountStatus: string){
     this.accountsService.addAccount(accountName, accountStatus);
     this.loggerService.logToConsole(accountStatus);

  }

}
