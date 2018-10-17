import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {ScheduleAppointmentComponent} from '../../modals/schedule-appointment/schedule-appointment.component';
import {Globals} from '../../../statics/globals';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  constructor(private _modalService: BsModalService) {

  }

  ngOnInit() {
  }

  openScheduleAppointment(){
      this._modalService.show(ScheduleAppointmentComponent, Object.assign({}, Globals.optionModalLg, { class: 'gray modal-lg' }));
  }

}
