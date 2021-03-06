import { Component, OnInit, Input } from '@angular/core';
import { EBGSFactionV3Schema } from '../../typings';
import { Options, IndividualSeriesOptions } from 'highcharts';

@Component({
    selector: 'app-faction-chart',
    templateUrl: './faction-chart.component.html'
})

export class FactionChartComponent implements OnInit {
    @Input() factionData: EBGSFactionV3Schema;
    options: Options;
    constructor() { }

    ngOnInit(): void {
        const history = this.factionData.history;
        const allSystems: string[] = [];
        history.forEach(element => {
            if (allSystems.indexOf(element.system) === -1) {
                allSystems.push(element.system);
            }
        });
        const series: IndividualSeriesOptions[] = [];
        history.sort((a, b) => {
            if (a.updated_at < b.updated_at) {
                return -1;
            } else if (a.updated_at > b.updated_at) {
                return 1;
            } else {
                return 0;
            }
        });
        allSystems.forEach(system => {
            const data: [number, number][] = [];
            history.forEach(element => {
                if (element.system === system) {
                    data.push([
                        Date.parse(element.updated_at),
                        Number.parseFloat((element.influence * 100).toFixed(2))
                    ]);
                } else {
                    if (element.systems.findIndex(systemElement => {
                        return systemElement.name === system;
                    }) === -1) {
                        data.push([Date.parse(element.updated_at), null]);
                    }
                }
            });
            series.push({
                name: system,
                data: data
            });
        });
        this.options = {
            xAxis: { type: 'datetime' },
            title: { text: 'Influence trend' },
            series: series
        };
    }
}
