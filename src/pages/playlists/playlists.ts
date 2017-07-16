import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ModalController } from 'ionic-angular';
import { CancionesPage } from '../canciones/canciones';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
import { PerfilDetallePage } from '../perfil-detalle/perfil-detalle';
/**
 * Generated class for the PlaylistsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-playlists',
  templateUrl: 'playlists.html',
  providers: [DeezerServiceProvider]
})
export class PlaylistsPage {
  public user: any;
  public playlists: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ds: DeezerServiceProvider,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController) {
    this.user = this.navParams.get('user');
    this.playlists = [];

  }

  goToCanciones(playlist) {
    this.navCtrl.push(CancionesPage, { playlist: playlist });
  }
  goToPerfilDetalle(user, playlists) {
    //renderiza
    let modal = this.modalCtrl.create(PerfilDetallePage, {
      user: user,
      playlists: playlists
    });
    modal.present();
    modal.onDidDismiss(data => console.log(data))
  }
  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ds.getUserPlaylists(this.user.id).subscribe(data => {
      this.playlists = data.data;
      loader.dismiss();

    })
  }

}
