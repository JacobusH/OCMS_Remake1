import {Component, OnInit, OnDestroy, Input, Host } from '@angular/core';
import {NgClass, NgStyle} from '@angular/common';

import {ProgressDirective} from 'app/directives/progress.directive';

@Component({
    selector: 'app-progress-bar',
    template: `
  <div class="progress-bar"
    style="min-width: 0;"
    role="progressbar"
    [ngClass]="type && 'progress-bar-' + type"
    [ngStyle]="{width: (percent < 100 ? percent : 100) + '%', transition: transition}"
    aria-valuemin="0"
    [attr.aria-valuenow]="value"
    [attr.aria-valuetext]="percent.toFixed(0) + '%'"
    [attr.aria-valuemax]="max"
    ><ng-content></ng-content></div>
`
})
export class ProgressBarComponent implements OnInit, OnDestroy {
    @Input() public type:string;

    @Input('currentValue') public get value():number {
        return this._value;
    }

    public set value(v:number) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }

    public percent:number = 0;
    public transition:string;

    private _value:number;

    constructor(@Host() public progress:ProgressDirective) {
    }

    ngOnInit() {
        this.progress.addBar(this);
    }

    ngOnDestroy() {
        this.progress.removeBar(this);
    }

    public recalculatePercentage() {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);

        let totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);

        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
}
