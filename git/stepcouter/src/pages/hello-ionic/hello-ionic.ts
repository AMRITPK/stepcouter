import { Component } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { Pedometer } from '@ionic-native/pedometer';
import { Stepcounter } from '@ionic-native/stepcounter';
@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
public base64Image: string;
public peddata:string;
public steps:string;
public avail:string;
public asdf:string;
  constructor(private camera: Camera,private pedometer: Pedometer,private stepcounter: Stepcounter) {

  }
startPedo(){


/*
this.pedometer.isDistanceAvailable()
  .then((available: boolean) => this.avail=available+"")
  .catch((error: any) => console.log(error));
  
this.pedometer.startPedometerUpdates()
   .subscribe((data: IPedometerData) => {
     console.log(data);
	 this.peddata=data+"";
   });
   

*/


this.pedometer.isDistanceAvailable().then((data) => {
     console.log(data);
     this.avail=data+"";
	 
   });


this.steps= "0";
this.pedometer.startPedometerUpdates()
.subscribe((data) => {
     console.log(typeof (data));
     console.log(data);
     console.log(data);
	// this.asdf=data;
	 this.peddata=data.distance+"";
	 this.steps= data.numberOfSteps+"";
   });

}
takePicture(){
	let startingOffset = 0;
	this.stepcounter.start(startingOffset).then(onSuccess => {console.log('stepcounter-start success', onSuccess); this.peddata=JSON.parse(onSuccess); }, onFailure => console.log('stepcounter-start error', onFailure));

	this.stepcounter.getHistory().then(historyObj => console.log('stepcounter-history success', historyObj), onFailure => console.log('stepcounter-history error', onFailure));
  }
}
