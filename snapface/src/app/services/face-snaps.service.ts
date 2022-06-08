import { Injectable } from '@angular/core';
import { FaceSnap } from "../models/face-snap.model";

@Injectable ({
    providedIn:'root'
})
export class FaceSnapsService{
  faceSnaps: FaceSnap[] = [
    {
      id:1,
      title:'Archibald',
      description:'Mon meilleur ami depuis tout petit',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date(),
      messSnapped:"Oh ! Snap",
      snapped:false,
      snaps:0
    },
    {
      id:2,
      title:'Tchopi',
      description:'Mon meilleur frère depuis tout petit',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date(),
      messSnapped:"Oh ! Snap",
      snapped:false,
      snaps:0
    },
    {
      id:3,
      title:'Kirikou',
      description:'Mon meilleur cousin depuis tout petit',
      imageUrl:'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate:new Date(),
      messSnapped:"Oh ! Snap",
      snapped:false,
      snaps:0
    }
  ];
  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number) : FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      return faceSnap;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      faceSnap.snaps++;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }

  addFaceSnap(formValue: {title:string,description:string,imageUrl:string,location?:string}){
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps:0,
      createdDate:new Date(),
      messSnapped:"oh snap",
      snapped:false,
      id:this.faceSnaps[this.faceSnaps.length - 1].id +1
    }
    this.faceSnaps.push(faceSnap);
  }
}
