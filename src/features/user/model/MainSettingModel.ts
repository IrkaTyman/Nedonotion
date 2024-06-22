import { User } from '@entities/user';

export type MainSettingsModel = Pick<User, 'name' | 'avatarUrl'>;
