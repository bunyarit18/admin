import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { ListComponent } from './pages/list/list.component';
import { RoomComponent } from './pages/room/room.component';
import { StaffComponent } from './pages/staff/staff.component';
import { TreasuryComponent } from './pages/treasury/treasury.component';



const routes: Routes = [
  {
    path : '',
    component : AppComponent,
    children :[
      {
        path : '',
        component : DashboardComponent
      }
    ]
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'customer',
    component: CustomerComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'financial',
    component: FinancialComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'room',
    component:  RoomComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'treasury',
    component: TreasuryComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

