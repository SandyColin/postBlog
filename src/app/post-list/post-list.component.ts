import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts = [
    {
      title: 'Mon premier post',
      // tslint:disable-next-line:max-line-length
      content: 'Haec Spoletium inpigre inpigre cum dextris tutius nuptias rogati rogati rogati tamen pergunt vel vel ita pergunt instituta vel offertur vel observentur inminuto sunt vigore dextris cavatis cum usque artuum.',
      loveIts: 2,
      created_at: new Date('2019-09-01'),
    }, {
      title: 'Mon deuxième post',
      // tslint:disable-next-line:max-line-length
      content: 'Haec Spoletium inpigre inpigre cum dextris tutius nuptias rogati rogati rogati tamen pergunt vel vel ita pergunt instituta vel offertur vel observentur inminuto sunt vigore dextris cavatis cum usque artuum.',
      loveIts: -4,
      created_at: '2019-10-01',
    }, {
      title: 'Mon troisième post',
      // tslint:disable-next-line:max-line-length
      content: 'Haec Spoletium inpigre inpigre cum dextris tutius nuptias rogati rogati rogati tamen pergunt vel vel ita pergunt instituta vel offertur vel observentur inminuto sunt vigore dextris cavatis cum usque artuum.',
      loveIts: 0,
      created_at: '2019-09-01',
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
