export interface IAppSlider {
  loading: boolean;
  error: any;
  hasMoreData?: boolean;
  moveSliderList?: IListObj;
}
export interface IAlertState {
  openAlert: boolean;
  message: string;
  severity: string;
}

export interface IListObj {
  data?: any[];
  hasMore?: boolean;
  page?: number;
  totalCount?: number;
  count?: number;
}
