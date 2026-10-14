import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home.component').then((c) => c.HomeComponent),
    title: 'Home Page | Zenzo Store',
  },
  {
    path: 'shop',
    loadComponent: () => import('./features/shop/shop.component').then((c) => c.ShopComponent),
    title: 'Shop Page | Zenzo Store',
  },
  {
    path: 'categories',
    loadComponent: () =>
      import('./features/categories/categories.component').then((c) => c.CategoriesComponent),
    title: 'Categories Page | Zenzo Store',
  },
  {
    path: 'category-details/:id/:slug',
    loadComponent: () =>
      import('./features/category-details/category-details.component').then(
        (c) => c.CategoryDetailsComponent,
      ),
    title: 'Category details Page | Zenzo Store',
  },
  {
    path: 'brands',
    loadComponent: () =>
      import('./features/brands/brands.component').then((c) => c.BrandsComponent),
    title: 'Brands Page | Zenzo Store',
  },
  {
    path: 'whishlist',
    loadComponent: () =>
      import('./features/wishlist/wishlist.component').then((c) => c.WishlistComponent),
    title: 'Whishlist Page | Zenzo Store',
  },
  {
    path: 'cart',
    loadComponent: () => import('./features/cart/cart.component').then((c) => c.CartComponent),
    title: 'Cart Page | Zenzo Store',
  },
  {
    path: 'details/:id/:slug',
    loadComponent: () =>
      import('./features/details/details.component').then((c) => c.DetailsComponent),
    title: 'Details Page | Zenzo Store',
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then((c) => c.CheckoutComponent),
    title: 'Checkout Page | Zenzo Store',
  },
  {
    path: 'order',
    loadComponent: () =>
      import('./features/orders/orders.component').then((c) => c.OrdersComponent),
    title: 'Order Page | Zenzo Store',
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login.component').then((c) => c.LoginComponent),
    title: 'Login Page | Zenzo Store',
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/register/register.component').then((c) => c.RegisterComponent),
    title: 'Register Page | Zenzo Store',
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import('./features/forgot/forgot.component').then((c) => c.ForgotComponent),
    title: 'Forgot-password Page | Zenzo Store',
  },
  {
    path: '**',
    loadComponent: () =>
      import('./features/notfound/notfound.component').then((c) => c.NotfoundComponent),
    title: 'Page NotFound | Zenzo Store',
  },
];
