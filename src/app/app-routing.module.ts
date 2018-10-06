import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AuthGuard, GuestGuard } from './shared';

const routes: Routes = [
    /* We use loadChildren for lazy loading */
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule',
       
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule',
    },
    {
        path: 'volunteer',
        loadChildren: './volunteer/volunteer.module#VolunteerModule',
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule',
        canActivate: [GuestGuard]
    },
    {
        path: 'bevoluteer',
        loadChildren: './be-volunteer/be-volunteer.module#BeVolunteerModule',
    },
    {
        path: 'privacy-policy',
        loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyModule',
    },
    {
        path: 'our-sponsors',
        loadChildren: './our-sponsors/our-sponsors.module#OurSponsorsModule',
    },
    {
        path: 'gallery',
        loadChildren: './gallery/gallery.module#GalleryModule',
    },
    /* {
        path: 'analytics',
        loadChildren: './analytics/analytics.module#AnalyticsModule',
    }, */
    {
        path: 'investor-investing',
        loadChildren: './investor-investing/investor-investing.module#InvestorInvestingModule',
    },
    {
        path: 'application',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },
    /* Any unknown path will redirect user to dashboard if he is logged in, if not
    to login */
    { path: '**', redirectTo: '/application', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: false,
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
