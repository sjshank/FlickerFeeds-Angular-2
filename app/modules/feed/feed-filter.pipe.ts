import { PipeTransform, Pipe } from '@angular/core';


@Pipe({
    name: 'descFilter'
})
export class DescHtmlFilter implements PipeTransform{
    transform(val: string): string {
        return String(val).replace(/<[^>]+>/gm, '');
    }
}

@Pipe({
    name: 'publishedFilter'
})
export class PublishedFilter implements PipeTransform{
    transform(val: string): string {
        return (new Date(val)).toDateString();
    }
}

@Pipe({
    name: 'authorFilter'
})
export class AuthorFilter implements PipeTransform{
    transform(val: string): string {
        return val.match(/\((.+?)\)/)[1];
    }
}