import { Component, Input, OnInit } from '@angular/core';

import { Router } from '@angular/router';

interface Card {
  name: string,
  price: number,
  url_image: string
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {

  @Input('content') content: Card = {name: "", price: 0, url_image: ""};

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSendData() {
    this.router.navigateByUrl('/infoproducto', { state: this.content });
  }

}
