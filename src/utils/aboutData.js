import { useTranslation } from "react-i18next";

export const AboutData = () => {
  const { t } = useTranslation();

  const aboutData = [
    {
      title: t("aboutSection.aboutData_myStartTitle"),
      paragraph1: t("aboutSection.aboutData_myStartTextParagraph1"),
      paragraph2: t("aboutSection.aboutData_myStartTextParagraph2"),
      paragraph3: t("aboutSection.aboutData_myStartTextParagraph3"),
      paragraph4: t("aboutSection.aboutData_myStartTextParagraph4"),
    },
  ];

  return aboutData;
};
