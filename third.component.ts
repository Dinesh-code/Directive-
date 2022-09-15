import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {


  singing: Song[] = [
    { singerName: "arijit sing", sangSong: 40, album_Movie: "Rabta" },
    { singerName: "Jubib Nautiyal", sangSong: 80, album_Movie: "Hit of Jubin" },
    { singerName: "Sonu Nigam", sangSong: 150, album_Movie: "Sonu'S Hits" },
    { singerName: "Lata mangeshkar", sangSong: 20, album_Movie: "Hits of Lata" },
    { singerName: "Badshaha", sangSong: 30, album_Movie: "hits Of Badshaha" },
    { singerName: "Shreya Ghoshal", sangSong: 300, album_Movie: "Shreya's special" },
    { singerName: "Kumar sanu", sangSong: 500, album_Movie: "Kumar special" },
    { singerName: "alka Yadnik", sangSong: 38, album_Movie: "Hits of alkaji" }
  ]


  constructor() { }

  ngOnInit() {
  }
}



class Song {
  singerName: string;
  sangSong: number;
  album_Movie: string

}