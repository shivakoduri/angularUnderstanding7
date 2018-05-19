import {LoggingService} from "./logging.service";

export class AccountsService{
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  constructor(private loggerService: LoggingService){

  }

  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
    this.loggerService.logToConsole(status);
  }

  updateStatus(id: number, status: string){
     this.accounts[id].status = status;
    this.loggerService.logToConsole(status);
  }
}
