import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {StudentListComponent} from "./app/student-list/student-list.component";
import {StudentDetailComponent} from "./app/student-detail/student-detail.component";
import {ModifyStudentComponent} from "./app/modify-student/modify-student.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {importProvidersFrom} from "@angular/core";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";

const routes:Routes=[
  {path:'', redirectTo:'/students', pathMatch:'full'},//default route
  {path: 'students', component: StudentListComponent},
  {path: 'students/:id', component: StudentDetailComponent},
  {path:'modify-student', component:ModifyStudentComponent},
  {path:'**', component:PageNotFoundComponent},
];
/*bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));*/

bootstrapApplication(AppComponent, {providers:[provideHttpClient(withInterceptorsFromDi()),
      provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService,{delay:1000}))]},
  );
