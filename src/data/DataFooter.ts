interface Data {
  [index: string]: string;
}
export const DataFooterLinks: Data = {
  perfilLinkedin: "https://www.linkedin.com/in/ana-cossio-50649710a/",
  perfilGithub: "https://github.com/aniicossio1997",
  perfinEmail: process.env.REACT_APP_SERVICE_ID || "",
};
export const DataCopyright: Data = {
  title: "Developed with React Js, chakra ui and typeScript",
  copy: `© ${new Date().getFullYear()} All rights reserved.`,
  by: " By Ana cossio",
  code: "link",
};
