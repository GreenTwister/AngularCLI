import {Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService} from "../services/face-snaps.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})

export class SingleFaceSnapComponent {
  constructor(private faceSnapsService: FaceSnapsService,
              private route:ActivatedRoute) {}
  messSnapped!:string
  faceSnap!:FaceSnap

  ngOnInit(){
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(snapId);
  }
  onSnap() {
    if (this.messSnapped === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'snap');
      this.messSnapped = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'unsnap');
      this.messSnapped = 'Oh Snap!';
    }
  }

}
