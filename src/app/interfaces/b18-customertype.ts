import { ICustomerDetail } from "./b18-customerdetail";

export interface ICustomerType {
  CustomerTypeId: number,
  CustomterTypeName: string,
  Customers: ICustomerDetail
}
