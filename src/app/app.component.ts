import { HttpClient } from '@angular/common/http';//importa il modulo
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //dichiarazione delle variabili e inizializzazione con virgolette vuote
  nome:string = ""
  naz:string = ""

  //lo usiamo per creare un oggetto di tipo HTTpclient
  constructor(private richiesta:HttpClient){}
  public mostra(){
    //inviamo la richiesta get all'Api e quando finisce eseguiamo il subscribe, eseguito in ogni caso
    this.richiesta.get("https://api.nationalize.io/?name="+this.nome).subscribe(
      //se esito positivo, datinaz contiene l'output dell'Api
      datinaz => {
        //assegnamo alla variabile naz il dato che prendiamo da datinaz
        this.naz= datinaz["country"][0]["country_id"]
        
      },
      //se esito negativo, errore conterrà il problema riscontrato nella richiesta get
      errore => {
        console.log(errore["error"])
      }
    )
  }
}
