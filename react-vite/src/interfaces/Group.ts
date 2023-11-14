import { IApplication } from "./Application";

export interface IGroup {
  id: string;
  name: string;
  applications: IApplication[];
}
