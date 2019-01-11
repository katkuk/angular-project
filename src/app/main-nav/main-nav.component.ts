import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenuTrigger } from '@angular/material';
// import { FirebaseService } from '../shared/firebase.service';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { FirebaseService } from '../firebase/firebase.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;

  openMenuMethod() {
    this.trigger.openMenu();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private firebaseService: FirebaseService) {}

  onSaveData(){
    console.log('on save data clicked');
    this.firebaseService.storeRecipes();
  }

  onGetData(){
    console.log('get data clicked');
    this.firebaseService.getRecipes();
  }
  
  }


