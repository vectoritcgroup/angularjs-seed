import { env } from './env';
import { paths } from '../paths';

export const entry = env.isTest === true ? undefined : {
  app: paths.app,
};
