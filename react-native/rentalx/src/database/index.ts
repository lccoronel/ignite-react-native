import { Database } from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import { Car } from './models/car';
import { User } from './models/user';
import { schemas } from './schema';

const adapter = new SQLiteAdapter({ schema: schemas });

export const database = new Database({
  adapter,
  modelClasses: [User, Car],
});
