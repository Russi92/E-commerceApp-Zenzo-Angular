import { Component, inject, OnInit, signal } from '@angular/core';
import { CategoriesService } from '../../../../core/services/categories.service';
import { Categories } from '../../../../core/models/categories.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-home',
  imports: [RouterLink],
  templateUrl: './category-home.component.html',
  styleUrl: './category-home.component.css',
})
export class CategoryHomeComponent implements OnInit {
  private readonly categoriesService = inject(CategoriesService);
  categoriesList = signal<Categories[]>([]);

  ngOnInit(): void {
    this.getCategoriesData();
  }

  getCategoriesData(): void {
    this.categoriesService.getAllCategories().subscribe({
      next: (res) => {
        this.categoriesList.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
