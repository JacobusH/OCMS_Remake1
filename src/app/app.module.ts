// modules
import { AccordionModule } from 'ngx-accordion';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CollapseModule } from 'ngx-bootstrap';
import { Daterangepicker, DaterangepickerConfig } from 'ng2-daterangepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { MdMenuModule, MdButtonModule, MdIconModule, MdSelectModule } from '@angular/material';
import { MatMenuModule, MatButtonModule, MatIconModule, MatSelectModule } from '@angular/material';
import { TreeModule} from 'angular-tree-component';
import { YoutubePlayerModule } from 'ng2-youtube-player';
// import { Ng2ImageGalleryModule } from 'ng2-image-gallery';
// import { LightboxModule } from 'angular2-lightbox';
// import { Angular2ImageGalleryModule } from 'ngx-bootstrap';

// providers
import { AlertService } from 'app/providers/alert.service';
import { AlertMultiService } from 'app/providers/alert-multi.service';
import { LiveChatStatusService } from 'app/providers/liveChatStatus.service';
import { AF } from 'app/providers/af.service';
import { AppCustomPreloader } from 'app/helpers/AppCustomPreloader';
import { AuthenticationService } from 'app/providers/authentication.service';
import { fakeBackendProvider } from 'app/helpers/fake-backend/fake-backend.component';
import { ImageService } from 'app/providers/image.service';
import { UploadService } from 'app/providers/upload.service';
import { UserService } from 'app/providers/user.service';

// pipes
import { ImageFilterPipe } from 'app/pipes/filter.pipe';
import { ActiveFilterPipe } from 'app/pipes/active-filter.pipe';
import { ReadFilterPipe } from 'app/pipes/read-filter.pipe';
import { SignupFilterPipe } from 'app/pipes/signup-filter.pipe';
import { ResourceCategoryPipe } from 'app/pipes/resource-category.pipe';

// directives
import { AlertComponent } from './directives/alert/alert.component';
import { AlertMultiComponent } from './directives/alert-multi/alert-multi-component';

// guards
import { AuthService } from 'app/guards/auth.service';
import { AuthGuard } from 'app/guards/auth-guard.service';

// components
import { CarouselComponent } from 'app/components/image/carousel/carousel.component';
import { GalleryCarouselComponent } from 'app/components/image/gallery-carousel/gallery-carousel.component';
import { HeaderComponent } from 'app/components/shared/header/header.component';
import { ImageGalleryComponent } from 'app/components/image/image-gallery/image-gallery.component';
import { ImageGalleryDetailComponent } from 'app/components/image/image-gallery/image-gallery-detail/image-gallery-detail.component';

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
import { MediaManagerComponent } from 'app/components/managers/media-manager/media-manager.component';
import { RegisterComponent } from './pages/register/register.component';
import { LearntoplayComponent } from './pages/learntoplay/learntoplay.component';
import { AdminNavComponent } from 'app/components/navigation/admin-nav/admin-nav.component';
import { UserManagerComponent } from 'app/components/managers/user-manager/user-manager.component';
import { MessageManagerComponent } from 'app/components/managers/message-manager/message-manager.component';
import { LivechatManagerComponent } from 'app/components/managers/livechat-manager/livechat-manager.component';
import { ThanksComponent } from './pages/contact/thanks/thanks.component';
import { SignupManagerComponent } from 'app/components/managers/signup-manager/signup-manager.component';
import { LivechatComponent } from './components/livechat/livechat.component';
import { MenuPlusComponent } from './components/navigation/menu-plus/menu-plus.component';
import { HomeSplashComponent } from './pages/home/home-splash/home-splash.component';
import { YoutubeComponent } from './pages/testing/youtube/youtube.component';
import { UploadFormComponent } from './components/uploads/upload-form/upload-form.component';
import { UploadComponent } from './pages/testing/upload/upload.component';
import { FormTeacherUploadComponent } from './components/uploads/form-teacher-upload/form-teacher-upload.component';
import { FormGalleryItemUploadComponent } from './components/uploads/form-gallery-item-upload/form-gallery-item-upload.component';
import { TreeComponent } from './pages/testing/tree/tree.component';
import { SkillTreeComponent } from './components/skill-tree/skill-tree.component';
import { HomeTilesComponent } from './pages/home/home-tiles/home-tiles.component';
import { HomeLearntoplayComponent } from './pages/home/home-learntoplay/home-learntoplay.component';
import { HomeTestimonialsComponent } from './pages/home/home-testimonials/home-testimonials.component';
import { HomeTeachersComponent } from './pages/home/home-teachers/home-teachers.component';
import { HomepageManagerComponent } from './components/managers/homepage-manager/homepage-manager.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCFToauOWTjn55Oc2e6L1YkCt5ZGzbMXV8',
  authDomain: 'ocmusicschool-11817.firebaseapp.com',
  databaseURL: 'https://ocmusicschool-11817.firebaseio.com',
  storageBucket: 'ocmusicschool-11817.appspot.com',
  messagingSenderId: '202663817255'
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', canActivate: [AuthGuard], component: AdministrationComponent, children: [
    { path: "messages", component: MessageManagerComponent},
    { path: "chat", component: LivechatManagerComponent},
    { path: "media", component: MediaManagerComponent},
    { path: "signups", component: SignupManagerComponent},
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
  { path: 'testing/youtube', component: YoutubeComponent },
  { path: 'testing/upload', component: UploadComponent },
  { path: 'testing/tree', component: TreeComponent },
  { path: 'contact/thanks', component: ThanksComponent },
  { path: '**', component: PageNotFoundComponent }

];

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
    ActiveFilterPipe,
    ReadFilterPipe,
    ResourceCategoryPipe,
    LoginComponent,
    AlertComponent,
    AlertMultiComponent,
    ValidateEqualComponent,
    ProfileComponent,
    MediaManagerComponent,
    RegisterComponent,
    SignupFilterPipe,
    LearntoplayComponent,
    AdminNavComponent,
    UserManagerComponent,
    MessageManagerComponent,
    LivechatManagerComponent,
    ThanksComponent,
    SignupManagerComponent,
    LivechatComponent,
    MenuPlusComponent,
    HomeSplashComponent,
    YoutubeComponent,
    UploadFormComponent,
    UploadComponent,
    FormTeacherUploadComponent,
    FormGalleryItemUploadComponent,
    TreeComponent,
    SkillTreeComponent,
    HomeTilesComponent,
    HomeLearntoplayComponent,
    HomeTestimonialsComponent,
    HomeTeachersComponent,
    HomepageManagerComponent
  ],
  imports: [
    AccordionModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    CarouselModule.forRoot(),
    CollapseModule,
    Daterangepicker,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    MatMenuModule, 
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    TreeModule,
    YoutubePlayerModule 
    // LightboxModule,
    // Ng2ImageGalleryModule,
  ],
  providers: [
    AF,
    AlertService,
    AlertMultiService,  
    LiveChatStatusService,
    AppCustomPreloader,
    AuthGuard,
    AuthService,
    AuthenticationService,
    ImageService,
    ImageFilterPipe,
    ActiveFilterPipe,
    ReadFilterPipe,
    SignupFilterPipe,
    UploadService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
