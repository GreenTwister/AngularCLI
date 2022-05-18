import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  snapped!: boolean;
  messSnapped!: string;
  imageUrl!: string;

  ngOnInit() {
    this.title = "Archibald";
    this.description = "Mon meilleur ami depuis tout petit !";
    this.createdDate = new Date();
    this.snaps = 6;
    this.imageUrl = "https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg";
    this.snapped = false;
    this.messSnapped = "Oh Snap !";
  }

  onChangeSnap() {
    if(!this.snapped){
      this.snaps++;
      this.snapped = true;
      this.messSnapped = "Oops, un snap";
    }else{
      this.snaps--;
      this.snapped = false;
      this.messSnapped = "Oh Snap !";
    }

  }
}
