import {Component, OnInit} from '@angular/core';
import {Date} from '../../../interfaces/date';

@Component({
    selector: 'app-schedule-appointment',
    templateUrl: './schedule-appointment.component.html',
    styleUrls: ['./schedule-appointment.component.scss']
})
export class ScheduleAppointmentComponent implements OnInit {

    dates: Date[] = [
        {
            dayNumber: 23,
            dayText: 'Lunes'
        }, {
            dayNumber: 24,
            dayText: 'Martes'
        }, {
            dayNumber: 25,
            dayText: 'Miercoles'
        }, {
            dayNumber: 26,
            dayText: 'Jueves'
        }, {
            dayNumber: 27,
            dayText: 'Viernes'
        }, {
            dayNumber: 28,
            dayText: 'Sabado'
        }
    ];

    hours: any[] = [
        {hourRange: '12PM - 1PM'},
        {hourRange: '1PM - 2PM'},
        {hourRange: '2PM - 3PM'},
        {hourRange: '3PM - 4PM'},
        {hourRange: '4PM - 5PM'},
        {hourRange: '5PM - 6PM'},
    ];

    dateSelected:number=null;
    hourSelected:string=null;

    constructor() {
    }

    ngOnInit() {
    }

}
