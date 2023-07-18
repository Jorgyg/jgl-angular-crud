import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Character } from '../character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters?:  Character[];

  constructor(private databaseService: DatabaseService) {}
  
  ngOnInit(): void {
    this.databaseService.getAll().subscribe((result: Character[]) => {
      this.characters = result;
      console.log(this.characters);
    });
  }
}
