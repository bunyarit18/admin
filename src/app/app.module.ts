import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FinancialComponent } from './pages/financial/financial.component';
import { ListComponent } from './pages/list/list.component';
import { RoomComponent } from './pages/room/room.component';
import { StaffComponent } from './pages/staff/staff.component';
import { TreasuryComponent } from './pages/treasury/treasury.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DashboardComponent,
    CalendarComponent,
    FinancialComponent,
    ListComponent,
    RoomComponent,
    StaffComponent,
    TreasuryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
