import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, PopoverController } from 'ionic-angular';
import { DeezerServiceProvider } from '../../providers/deezer-service/deezer-service';
import { CancionPopoverPage } from '../cancion-popover/cancion-popover';
/**
 * Generated class for the CancionesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [DeezerServiceProvider]
})
export class CancionesPage {

  public playlist: any;
  public songs: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerServiceProvider, public loadingCtrl: LoadingController, public popoverCtrl: PopoverController) {
    this.playlist = this.navParams.get('playlist');
    this.songs = [];

  }

  openCancionPopover(event) {
    let popover = this.popoverCtrl.create(CancionPopoverPage);
    popover.present({
      ev: event
    });


  }

  ionViewDidLoad() {
    let loader = this.loadingCtrl.create();
    loader.present();
    this.ds.getPlaylistSongs(this.playlist.id).subscribe(data => {
      this.songs = data.data;
      loader.dismiss();

    });
  }

}
