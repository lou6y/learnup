import {Component, Inject, OnInit} from '@angular/core';
import {Category, Cour} from "../models/cour.model";
import {CourService} from "../services/cour.service";
import {map} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  categories: { cour: any[]; categoryName: string | undefined; categoryId: number }[] = [];
  courList: Cour[] = [];
  constructor(
    @Inject(CourService) private courService: CourService
  ) {}

  ngOnInit(): void {
    this.getCategories();
    this.getAllCourses();
  }

  private getAllCourses() {
    this.courService.getAllCours().subscribe(cours => {
      this.courList = cours;
      console.log('cours',this.courList);
    });
  }

  getCategories(): void {
    this.courService.getAllCours().subscribe(
      (cour) => {
        this.categories = Array.from(new Set(cour.map(cour => cour.category?.categoryName)))
          .map(categoryName => ({ categoryId: 0, categoryName, cour: [] }));

        console.log('All categories:', this.categories);
      },
      (error) => {
        console.error('Error fetching categories:', error);
      }
    );
  }

  searchCoursByCourName(searchValue: string | undefined): void {
    if (searchValue != null) {
      this.courList = this.courList.filter(cours => cours?.courName.toLowerCase().includes(searchValue.toLowerCase()));
    }
  }

  filterCoursByCategory(categoryName: string | undefined): void {
    if (categoryName != null) {
      this.courList = this.courList.filter(cours => cours?.category?.categoryName.toLowerCase() === categoryName.toLowerCase());
    }
  }

}
