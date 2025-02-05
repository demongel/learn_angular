import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { OrderbyPipe } from 'src/app/shared/orderby.pipe';

@Component({
  selector: 'app-pipe-two',
  templateUrl: './pipe-two.component.html',
  styleUrls: ['./pipe-two.component.css']
})
export class PipeTwoComponent {
  birthday = Date.now();

  currentTime$: Observable<number>;

  a: number = 0.258;
  b: number = 123;

  currentDate: number = Date.now();
  formats: Array<string> = ['short', 'medium', 'long', 'full', 'shortDate',
    'mediumDate', 'longDate', 'fullDate', 'shortTime', 'mediumTime', 'longTime',
    'fullTime', 'y', 'yy', 'yyy', 'yyyy', 'M', 'MM', 'MMM', 'MMMM', 'MMMMM',
    'L', 'LL', 'LLL', 'LLLL', 'LLLLLL', 'w', 'ww', 'W', 'd', 'dd', 'E', 'EE', 'EEE',
    'EEEE', 'EEEEE', 'EEEEEE', 'a', 'aa', 'aaa', 'h', 'hh', 'H', 'HH', 'm', 'mm', 's',
    'ss', 'z', 'zz', 'zzz', 'zzzz', 'Z', 'ZZ', 'ZZZ', 'ZZZZ', 'ZZZZZ', 'O', 'OO', 'OOO', 'OOOO']

  female: string = '0';
  // 映射对象
  dicMap: any = { '0': '女', '1': '男' };

  fruits: Array<string> = ['apple', 'tomato', 'banana', 'orange', 'grape', 'lemon'];

  /**
   * 通过interval创建符每秒发出一个当前的时间戳值，赋值给可观察对象类型的变量currentTime$。
   * 在模板中使用async管道获取变量currentTime$的最新值，同时使用链式管道转换时间戳值为可读格式的日期
   */
  constructor(private datePipe: DatePipe, private orderByPipe: OrderbyPipe) {
    let subscription = interval(1000) // 每秒发出一个当前的时间戳值
      .subscribe((index) => {
        this.currentTime$ = of(Date.now())
        if (index > 10) {
          subscription.unsubscribe()
          console.log("订阅结束");
        }
      })

    console.log(this.datePipe.transform(this.currentDate, "yyyy-MM-dd"));
    console.log(this.orderByPipe.transform(this.fruits, "desc"));
  }

}
