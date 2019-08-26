import axios from 'axios';
import Product from '../interfaces/Product';

export interface ApiListResponse<T> {
  data: T[];
  totalCount: number;
}

export interface ApiOptions {
  baseUrl?: string;
}

export default class Api {
  private baseUrl?: string;

  constructor(options?: ApiOptions) {
    if (options) {
      this.baseUrl = options.baseUrl;
    }
  }

  public async getProducts(params?: any) {
    const res = await axios.get(`${this.baseUrl || ''}/products`, { params });
    return res.data as ApiListResponse<Product>;
  }
}
