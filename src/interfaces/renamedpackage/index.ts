import { AgencyInterface } from 'interfaces/agency';
import { GetQueryInterface } from 'interfaces';

export interface RenamedpackageInterface {
  id?: string;
  name: string;
  description?: string;
  price: number;
  agency_id?: string;
  created_at?: any;
  updated_at?: any;

  agency?: AgencyInterface;
  _count?: {};
}

export interface RenamedpackageGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  agency_id?: string;
}
