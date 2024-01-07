import { Component } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
 
  userInfo : any = {
    avatar : '/assets/images/user.jpg',
    name : "Ned",
    accountBalance : 19.892,
    contributions : 4000,
    total : 1.892,
    transitions : [
      {
        date : '2020-08-25',
        transferName : 'Withdrawal Transfer to Bank-XXX11'
      },
      {
        date : '2020-07-18',
        transferName : 'Withdrawal Transfer to Bank-XXX99'
      },
      {
        date : '2020-07-14',
        transferName : 'Withdrawal Transfer to Bank-XXX14'
      }
    ]
  }

  constructor() {}

  ngOnInit(): void {}

}
