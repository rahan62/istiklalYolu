import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Router} from '@angular/router';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {
  public name = '';
  public surname = '';
  public birthdate: any;
  public decontNo: any;
  public users: any;
  public newUser: any;
  public sportsClub: any;
  public tcIdentity: any;
  public currentYear: any;
  public sex: any;
  constructor(public db: AngularFireDatabase,
              public router: Router) {
    this.db.list('users/').snapshotChanges().subscribe(items => {
      this.users = items.map(chs => {
        return chs.payload.val();
      });
    });
  }

  ngOnInit() {
  }
  addUser() {
    const tempDay = new Date(this.birthdate);
    this.currentYear = tempDay.getFullYear();
    this.newUser = {
      name: this.name,
      surname: this.surname,
      birthDate: this.birthdate,
      birthYear: this.currentYear,
      decontNo: this.decontNo,
      sportsClub: this.sportsClub,
      tcIdentity: this.tcIdentity,
      sex: this.sex
    };
    this.users.push(this.newUser);
    this.db.object('users/').set(this.users);
    alert('Başarıyla Kayıt Oldunuz!');
    this.router.navigateByUrl('/home');
  }
}
