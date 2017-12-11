import { t } from 'c-3po';
import './module1';
import './module2';
import('./async1').then((a) => console.log(a));
console.log(t`entry - point`);
