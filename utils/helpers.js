import SiteConfig from "@config/seo.json";

export function getSiteMetaData() {
  return SiteConfig.siteMetadata;
}

export function getFormattedDate(date) {
  const options = { year: "numeric", month: "long", day: "numeric" };

  const newDate = new Date(date);

  const formattedDate = newDate.toLocaleDateString("pt-BR", options);

  return formattedDate;
}
