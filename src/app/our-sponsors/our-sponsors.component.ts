import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {
    UserAuthenticationService,
    UtilService
} from '@shared';

declare var $: any;
declare var fontchange: any;

@Component({
    selector: 'app-our-sponsors-page',
    templateUrl: './our-sponsors.component.html',
    styleUrls: ['./our-sponsors.component.scss'],
})

export class OurSponsorsComponent {

    ngAfterViewInit() {
        this.generateChart("graph1", "2018", ["Reliance Jio", "Tata Group", "Juniper Networks"], [15, 12, 20.5]);
        this.generateChart("graph2", "2017", ["Juniper Networks", "TCS", "Infosys"], [15, 10, 13]);
        this.generateChart("graph3", "2016", ["Wipro", "Tata Group", "Juniper Networks"], [14, 12, 15.5]);
    }

    generateChart(id: string, year: string, cos: Array<string>, amt: Array<number>) {
        Highcharts.chart(id, {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Top 3 donors of ' + year,
            },
            xAxis: {
                categories: cos,
                title: {
                    text: null
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Donation (Lakhs)',
                    align: 'high'
                },
                labels: {
                    overflow: 'justify'
                }
            },
            tooltip: {
                valueSuffix: ' Lakhs'
            },
            plotOptions: {
                bar: {
                    dataLabels: {
                        enabled: true
                    }
                }
            },
            legend: {
                enabled: false,
            },
            credits: {
                enabled: false
            },
            series: [{ data: amt }]
        });
    }

}
