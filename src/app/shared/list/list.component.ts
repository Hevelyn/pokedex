import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './../../service/poke-api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  public getAllPokemons: any;
  private setAllPokemons: any;
  public apiError: boolean = false;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons().subscribe(
      res => {
       this.setAllPokemons = res.results
       this.getAllPokemons = this.setAllPokemons
        // console.log(res)
      },
      error => {
        this.apiError = true
      }
    )
  }

  getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    })

    this.getAllPokemons = filter;
  }
}
