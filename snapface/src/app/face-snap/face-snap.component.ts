import {Component, OnInit, Input} from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService} from "../services/face-snaps.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent {
  constructor(private faceSnapsService: FaceSnapsService) {}
  @Input() faceSnap!: FaceSnap;
  messSnapped!:string

  onSnap() {
    if (this.messSnapped === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id);
      this.messSnapped = 'Oops, unSnap!';
    } else {
      this.faceSnap.snaps--;
      this.messSnapped = 'Oh Snap!';
    }
  }

}
