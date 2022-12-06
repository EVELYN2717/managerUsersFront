import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss']
})
export class FooterComponentComponent implements OnInit {

  text: any = {
    option1: "@ All rights reserved",
    option2: "DÉJANOS AYUDARTE",
    option3: "¿Te gustaría recibir ideas/insrucciones y avisos sobre nuestros productos? Envíanos tus datos."
  };

  constructor() { }

  ngOnInit(): void {
  }

}
