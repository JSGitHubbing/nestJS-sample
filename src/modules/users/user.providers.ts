import { DataSource } from 'typeorm';
import { DATA_SOURCE } from '../database/constants';
import { USER_REPOSITORY } from './constants';
import { User } from './entities/user/user.entity';

export const userProviders = [
  {
    provide: USER_REPOSITORY,
    useFactory: (dataSource: DataSource) => dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
