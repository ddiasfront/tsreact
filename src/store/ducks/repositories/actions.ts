import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST, 'payload');
export const loadSucess = (data: Repository[]) => action(RepositoriesTypes.LOAD_SUCESS, data);
export const loadFail = () => action(RepositoriesTypes.LOAD_FAIL, 'payload');
