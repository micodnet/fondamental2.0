import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { PagesComponent } from './components/pages/pages.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { ChatHubComponent } from './components/chat-hub/chat-hub.component';
import { PdfComponent } from './components/pages/cours/pdf/pdf/pdf.component';
import { AlgorithmieComponent } from './components/pages/cours/algorithmie/algorithmie.component';
import { AnaliseModelisationComponent } from './components/pages/cours/analise-modelisation/analise-modelisation.component';
import { SqlDeclaratifComponent } from './components/pages/cours/sql-declaratif/sql-declaratif.component';
import { SqlProceduralComponent } from './components/pages/cours/sql-procedural/sql-procedural.component';
import { CSharpBasesComponent } from './components/pages/cours/c-sharp-bases/c-sharp-bases.component';
import { CSharpOOComponent } from './components/pages/cours/c-sharp-oo/c-sharp-oo.component';
import { WebApiComponent } from './components/pages/cours/web-api/web-api.component';
import { BlazorComponent } from './components/pages/cours/blazor/blazor.component';
import { JavaScryptComponent } from './components/pages/cours/java-scrypt/java-scrypt.component';
import { HtmlCssComponent } from './components/pages/cours/html-css/html-css.component';
import { AspMvcComponent } from './components/pages/cours/asp-mvc/asp-mvc.component';
import { GitComponent } from './components/pages/cours/git/git.component';
import { ScrumComponent } from './components/pages/cours/scrum/scrum.component';
import { UmlComponent } from './components/pages/cours/uml/uml.component';
import { AzureDeployComponent } from './components/pages/cours/azure-deploy/azure-deploy.component';
import { CyberSecuComponent } from './components/pages/cours/cyber-secu/cyber-secu.component';
import { AngularComponent } from './components/pages/cours/angular/angular.component';
import { AdoLinqComponent } from './components/pages/cours/ado-linq/ado-linq.component';
import { EntityFrameworkComponent } from './components/pages/cours/entity-framework/entity-framework.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormationComponent } from './components/pages/formation/formation.component';
import { StudentListComponent } from './components/admin/student-list/student-list.component';
import { ErreurComponent } from './components/shared/erreur/erreur.component';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { CoursComponent } from './components/pages/formation/cours/cours.component';
//import {HTTP_INTERCEPTORS } from '@angular/common/http';
//import { TokenInterceptor } from 'src/app/components/shared/services/token.interceptor';
//import { listResolver } from 'src/app/components/shared/services/list.resolver';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    AuthentificationComponent,
    PagesComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ChatHubComponent,
    PdfComponent,
    AlgorithmieComponent,
    AnaliseModelisationComponent,
    SqlDeclaratifComponent,
    SqlProceduralComponent,
    CSharpBasesComponent,
    CSharpOOComponent,
    WebApiComponent,
    BlazorComponent,
    JavaScryptComponent,
    HtmlCssComponent,
    AspMvcComponent,
    GitComponent,
    ScrumComponent,
    UmlComponent,
    AzureDeployComponent,
    CyberSecuComponent,
    AngularComponent,
    AdoLinqComponent,
    EntityFrameworkComponent,
    FormationComponent,
    StudentListComponent,
    UserListComponent,
    CoursComponent,
    ErreurComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
providers: [/*{provide : HTTP_INTERCEPTORS, useClass : TokenInterceptor, multi : true}*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule)