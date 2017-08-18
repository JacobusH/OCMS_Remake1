import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// pages
import { AppComponent } from './app.component';
import { AnnouncementsComponent } from 'app/pages/announcements/announcements.component';
import { AdministrationComponent } from 'app/pages/administration/administration.component';
import { AboutComponent } from 'app/pages/about/about.component';
import { ContactComponent } from 'app/pages/contact/contact.component';
import { FAQComponent } from 'app/pages/faq/faq.component';
import { GalleryComponent } from 'app/pages//gallery/gallery.component';
import { HomeComponent } from 'app/pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PageNotFoundComponent } from 'app/pages//page-not-found/page-not-found.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ResourcesComponent } from 'app/pages/resources/resources.component';
import { TeachersComponent } from 'app/pages/teachers/teachers.component';
import { TeacherDetailComponent } from 'app/pages//teacher-detail/teacher-detail.component';
import { TestimonialsComponent } from 'app/pages/testimonials/testimonials.component';
import { ValidateEqualComponent } from './directives/validate-equal/validate-equal.component';
import { MediaManagerComponent } from './components/media-manager/media-manager.component';
import { RegisterComponent } from './pages/register/register.component';
import { LearntoplayComponent } from './pages/learntoplay/learntoplay.component';
import { AdminNavComponent } from './components/admin-nav/admin-nav.component';
import { UserManagerComponent } from './components/user-manager/user-manager.component';
import { MessageManagerComponent } from './components/message-manager/message-manager.component';
import { LivechatManagerComponent } from './components/livechat-manager/livechat-manager.component';
import { ThanksComponent } from './pages/contact/thanks/thanks.component';
// components
import { CarouselComponent } from 'app/components/carousel/carousel.component';
import { GalleryCarouselComponent } from 'app/components/gallery-carousel/gallery-carousel.component';
import { HeaderComponent } from 'app/components/header/header.component';
import { ImageGalleryComponent } from 'app/components/image-gallery/image-gallery.component';
import { ImageGalleryDetailComponent } from 'app/components/image-gallery/image-gallery-detail/image-gallery-detail.component';
import { RecipesComponent } from 'app/recipes/recipes.component';
import { RecipeListComponent } from 'app/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from 'app/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from 'app/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from 'app/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from 'app/shopping-list/shopping-edit/shopping-edit.component';
// guards
import { AuthService } from 'app/guards/auth.service';
import { AuthGuard } from 'app/guards/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdministrationComponent, children: [
    { path: "messages", component: MessageManagerComponent},
    { path: "chat", component: LivechatManagerComponent},
    { path: "media", component: MediaManagerComponent},
    { path: "users", component: UserManagerComponent},
  ] },
  { path: 'about', component: AboutComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FAQComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'gallery/image/:id', component: ImageGalleryDetailComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'learntoplay', component: LearntoplayComponent },
  { path: 'learntoplay/:id', component: LearntoplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/:id', component: TeacherDetailComponent,
    // children: [
    //   { path: '', redirectTo: 'overview', pathMatch: 'full' },
      // { path: 'overview', component: Overview },
      // { path: 'specs', component: Specs }
    // ]
  },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'contact/thanks', component: ThanksComponent },
  { path: '**', component: PageNotFoundComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}