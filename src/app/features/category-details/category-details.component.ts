import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CategoriesService } from '../../core/services/categories.service';
import { Categories } from '../../core/models/categories.interface';

@Component({
  selector: 'app-category-details',
  imports: [],
  templateUrl: './category-details.component.html',
  styleUrl: './category-details.component.css',
})
export class CategoryDetailsComponent implements OnInit {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly categoriesService = inject(CategoriesService);

  categoryList = signal<Categories>({} as Categories);

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.getCategoryDetails(params.get('id')!);
    });
  }

  getCategoryDetails(id: string): void {
    this.categoriesService.getSpecificCategory(id).subscribe({
      next: (res) => {
        this.categoryList.set(res.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
