// modules
import { AccordionModule } from 'ngx-accordion';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AppRoutingModule } from 'app/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { Ng2ImageGalleryModule } from 'ng2-image-gallery';
// import { LightboxModule } from 'angular2-lightbox';
// import { Angular2ImageGalleryModule } from 'ngx-bootstrap';

// providers
import { AlertService } from 'app/providers/alert.service';
import { AF } from 'app/providers/af.service';
import { AppCustomPreloader } from 'app/helpers/AppCustomPreloader';
import { AuthenticationService } from 'app/providers/authentication.service';
import { fakeBackendProvider } from 'app/helpers/fake-backend/fake-backend.component';
import { ImageService } from 'app/providers/image.service';
import { UserService } from 'app/providers/user.service';

// pipes
import { ImageFilterPipe } from 'app/pipes/filter.pipe';
import { ResourceCategoryPipe } from 'app/pipes/resource-category.pipe';

// directives
import { AlertComponent } from './directives/alert/alert.component';

// guards
import { AuthService } from 'app/guards/auth.service';
import { AuthGuard } from 'app/guards/auth-guard.service';

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

export const firebaseConfig = {
  apiKey: 'AIzaSyCFToauOWTjn55Oc2e6L1YkCt5ZGzbMXV8',
  authDomain: 'ocmusicschool-11817.firebaseapp.com',
  databaseURL: 'https://ocmusicschool-11817.firebaseio.com',
  storageBucket: 'ocmusicschool-11817.appspot.com',
  messagingSenderId: '202663817255'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TeachersComponent,
    TestimonialsComponent,
    AnnouncementsComponent,
    FAQComponent,
    ContactComponent,
    ResourcesComponent,
    AdministrationComponent,
    GalleryComponent,
    PageNotFoundComponent,
    TeacherDetailComponent,
    CarouselComponent,
    RecipesComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    GalleryCarouselComponent,
    ImageGalleryComponent,
    ImageGalleryDetailComponent,
    ImageFilterPipe,
    ResourceCategoryPipe,
    LoginComponent,
    AlertComponent,
    ValidateEqualComponent,
    ProfileComponent,
    MediaManagerComponent,
    RegisterComponent,
    LearntoplayComponent,
    AdminNavComponent,
    UserManagerComponent,
    MessageManagerComponent,
    LivechatManagerComponent,
  ],
  imports: [
    AccordionModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule.forRoot(),
    CollapseModule,
    FormsModule,
    HttpModule,
    // LightboxModule,
    // Ng2ImageGalleryModule,
  ],
  providers: [
    AF,
    AlertService,
    AppCustomPreloader,
    AuthGuard,
    AuthService,
    AuthenticationService,
    ImageService,
    ImageFilterPipe,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
