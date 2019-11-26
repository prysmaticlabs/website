import { Component, Input } from '@angular/core';
import { NewsItem } from '../../models/news-item';

@Component({
    selector: 'news-item',
    templateUrl: './news-item.component.html',
})
export class NewsItemComponent {
    @Input() newsItem: NewsItem;
}
