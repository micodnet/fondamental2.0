import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './components/authentification/authentification.component';
import { LoginComponent } from './components/authentification/login/login.component';
import { RegisterComponent } from './components/authentification/register/register.component';
import { PagesComponent } from './components/pages/pages.component';
import { AdminComponent } from './components/admin/admin.component';
import { AlgorithmieComponent } from './components/pages/cours/algorithmie/algorithmie.component';
import { AnaliseModelisationComponent } from './components/pages/cours/analise-modelisation/analise-modelisation.component';
import { SqlDeclaratifComponent } from './components/pages/cours/sql-declaratif/sql-declaratif.component';
import { SqlProceduralComponent } from './components/pages/cours/sql-procedural/sql-procedural.component';
import { AdoLinqComponent } from './components/pages/cours/ado-linq/ado-linq.component';
import { CSharpBasesComponent } from './components/pages/cours/c-sharp-bases/c-sharp-bases.component';
import { CSharpOOComponent } from './components/pages/cours/c-sharp-oo/c-sharp-oo.component';
import { WebApiComponent } from './components/pages/cours/web-api/web-api.component';
import { AspMvcComponent } from './components/pages/cours/asp-mvc/asp-mvc.component';
import { BlazorComponent } from './components/pages/cours/blazor/blazor.component';
import { HtmlCssComponent } from './components/pages/cours/html-css/html-css.component';
import { EntityFrameworkComponent } from './components/pages/cours/entity-framework/entity-framework.component';
import { JavaScryptComponent } from './components/pages/cours/java-scrypt/java-scrypt.component';
import { GitComponent } from './components/pages/cours/git/git.component';
import { CyberSecuComponent } from './components/pages/cours/cyber-secu/cyber-secu.component';
import { AzureDeployComponent } from './components/pages/cours/azure-deploy/azure-deploy.component';
import { ScrumComponent } from './components/pages/cours/scrum/scrum.component';
import { UmlComponent } from './components/pages/cours/uml/uml.component';
import { ErreurComponent } from './components/shared/erreur/erreur.component';
import { authGuard } from './components/shared/services/auth.guard';
import { listResolver } from './components/shared/services/list.resolver';
import { UserListComponent } from './components/admin/user-list/user-list.component';
import { StudentListComponent } from './components/admin/student-list/student-list.component';
import { FormationComponent } from './components/pages/formation/formation.component';
import { CoursComponent } from './components/pages/formation/cours/cours.component';

const routes: Routes = [
  {path : '', redirectTo : 'login', pathMatch : 'full'},
  {path: 'admin', component: AdminComponent},
  {path : 'userlist',canActivate : [authGuard] , resolve : {maliste : listResolver}, component : UserListComponent},
  {path : 'studentlist', component: StudentListComponent},
  {path : 'formation', component: FormationComponent},
  {path : 'cours', component: CoursComponent},
  {path: 'authentification', component: AuthentificationComponent, children:[
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}, 
  ]},
  {path: 'pages', component: PagesComponent, children:[
    {path: 'algorithmie', component: AlgorithmieComponent},
    {path: 'analise-modelisation', component: AnaliseModelisationComponent},
    {path: 'sql-declaratif', component: SqlDeclaratifComponent},
    {path: 'sql-procedural', component: SqlProceduralComponent},
    {path: 'ado-linq', component: AdoLinqComponent},
    {path: 'c-sharp-bases', component: CSharpBasesComponent},
    {path: 'c-sharp-OO', component: CSharpOOComponent},
    {path: 'web-api', component: WebApiComponent},
    {path: 'entity-framework', component: EntityFrameworkComponent},
    {path: 'asp-mvc', component: AspMvcComponent},
    {path: 'blazor', component: BlazorComponent},
    {path: 'java-scrypt', component: JavaScryptComponent},
    {path: 'html-css', component: HtmlCssComponent},
    {path: 'git', component: GitComponent},
    {path: 'cyber-secu', component: CyberSecuComponent},
    {path: 'azure-deploy', component: AzureDeployComponent},
    {path: 'scrum', component: ScrumComponent},
    {path: 'uml', component: UmlComponent},
    
  ]},
  {path : 'erreur', component : ErreurComponent},
    {path : '**', redirectTo : 'erreur'}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
