interface IEmailJS {
  service_id: string;
  template_id: string;
  user_id: string;
}
export const DataKeyEmail: IEmailJS = {
  service_id: process.env.REACT_APP_SERVICE_ID || "",
  template_id: process.env.REACT_APP_TEMPLATE_ID || "",
  user_id: process.env.REACT_APP_USER_ID || "",
};
