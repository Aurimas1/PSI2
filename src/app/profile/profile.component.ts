import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { AngularFireStorage } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  readonly defaultFoto = 'assets/profile.jpg';

  constructor(private auth: AuthService, private storage: AngularFireStorage, private toast: ToastsManager) {}

  get foto(): string {
    return this.auth.foto ? this.auth.foto : this.defaultFoto;
  }

  upload(files: FileList): void {
    const file = files.item(0);

    console.log('File type: ', file.type);
    console.log('File size: ', file.size);

    if (file.type.split('/')[0] !== 'image') {
      this.toast.error('Pasirinkta nuotrauka yra netinkamo formato pasirinkite png arba jpg formato nuotrauką', 'Klaida');
      return;
    }

    if (file.size > 5242880) {
      this.toast.error('Pasirinkta nuotrauka yra per didelė prašome pasirinkite nuotrauką iki 5MB', 'Klaida');
      return;
    }

    const path = `foto/${Date.now()}_${file.name}`;

    this.storage.upload(path, file).downloadURL()
      .subscribe(x => this.auth.addFotoUrl(x).then(() => this.toast.success('Nuotrauka sėkmingai patalpinta')));
  }

}
