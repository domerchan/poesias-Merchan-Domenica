import { Component, OnInit } from '@angular/core';
import { Poema } from '../../model/poema';
import { AuthService } from '../../services/auth.service';
import { PoemasService } from '../../services/poemas.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-subir-poema',
  templateUrl: './subir-poema.page.html',
  styleUrls: ['./subir-poema.page.scss'],
})
export class SubirPoemaPage implements OnInit {

  poema: Poema = new Poema;
  base64Image: any;

  constructor(private auth: AuthService,
    private router: Router,
    private camera: Camera,
    private poemasService: PoemasService,
    private toastController: ToastController) { }

  user: any;
  
  ngOnInit() {
    this.auth.user.subscribe(data => {
      this.user = data;
    })
  }

  subirPoema() {
    this.poema.usuario = this.user;
    var today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    this.poema.fecha = date
    console.log(this.poema)
    this.poemasService.insertPoema(this.poema)
    this.toast('Poema subido exitosamente');
    this.router.navigate([`folder/Inbox`])
  }

  async toast(text: string, duration: number = 2000, position?) {
    const toast = await this.toastController.create({
      message: text,
      position: position || 'middle',
      duration: duration
    });
    toast.present();
  }

  tomarFoto() {
    const options: CameraOptions = {
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Image);
    }, (err) => {
      console.error(err);
    });
  }

  imagenCargada(e) {
    console.log("imagen cargada");
    console.log(JSON.stringify(e));
    this.poema.image = e;
  }

}
