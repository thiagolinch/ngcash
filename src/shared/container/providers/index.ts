import { container } from 'tsyringe';
import { IDateProvider } from './dateProvider/IDateProvider';
import { DaysJSDateProvider } from './dateProvider/implements/dayJsDateProvider';


container.registerSingleton<IDateProvider>(
    "DaysJSDateProvider",
    DaysJSDateProvider
)