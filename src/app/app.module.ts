// modules
import { AccordionModule } from 'ngx-accordion';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

// providers
import {AF} from './providers/af';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TeachersComponent } from './teachers/teachers.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AnnouncementsComponent } from './announcements/announcements.component';
import { FAQComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { ResourcesComponent } from './resources/resources.component';
import { AdministrationComponent } from './administration/administration.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TeacherDetailComponent } from './teacher-detail/teacher-detail.component';
import { CarouselComponent } from './components/carousel/carousel.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyCFToauOWTjn55Oc2e6L1YkCt5ZGzbMXV8',
  authDomain: 'ocmusicschool-11817.firebaseapp.com',
  databaseURL: 'https://ocmusicschool-11817.firebaseio.com',
  storageBucket: 'ocmusicschool-11817.appspot.com',
  messagingSenderId: '202663817255'
};

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/:id', component: TeacherDetailComponent,
    // children: [
    //   { path: '', redirectTo: 'overview', pathMatch: 'full' },
      // { path: 'overview', component: Overview },
      // { path: 'specs', component: Specs }
    // ]
  },
  { path: 'faq', component: FAQComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'announcements', component: AnnouncementsComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'administration', component: AdministrationComponent },
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
    CarouselComponent
  ],
  imports: [
    AccordionModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AF],
  bootstrap: [AppComponent]
})
export class AppModule { }
