/**
 * angular2-cookie-law
 *
 * Copyright 2016, @andreasonny83, All rights reserved.
 *
 * Author: @andreasonny83 <andreasonny83@gmail.com>
 */

import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { CookieLawComponent } from './cookie-law.component';
import { CookieLawService }   from './cookie-law.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CookieLawComponent],
  providers: [CookieLawService],
  exports: [CookieLawComponent]
})
export class CookieLawModule { }