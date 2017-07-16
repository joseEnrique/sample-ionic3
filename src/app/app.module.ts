import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from "../pages/inicio/inicio";

import { ContactoPage } from '../pages/contacto/contacto';
import { AcercaPage } from '../pages/acerca/acerca';
import { PerfilesPage } from '../pages/perfiles/perfiles';
import { CancionesPage } from '../pages/canciones/canciones';
import { PlaylistsPage } from '../pages/playlists/playlists';
import { DeezerServiceProvider } from '../providers/deezer-service/deezer-service';
import { PlayerComponent } from '../components/player/player';
import { PerfilDetallePage } from '../pages/perfil-detalle/perfil-detalle';
import { CancionPopoverPage } from '../pages/cancion-popover/cancion-popover';


@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    ContactoPage,
    AcercaPage,
    PerfilesPage,
    CancionesPage,
    PlaylistsPage,
    PlayerComponent,
    PerfilDetallePage,
    CancionPopoverPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,

    ContactoPage,
    AcercaPage,
    PerfilesPage,
    CancionesPage,
    PlaylistsPage,
    PlayerComponent,
    PerfilDetallePage,
    CancionPopoverPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DeezerServiceProvider
  ]
})
export class AppModule {}
