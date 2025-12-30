import { useTranslation } from "react-i18next"

export function EducationData() {

	const {t} = useTranslation();

	const educationData = [
		{
			course: t("educationSection.educationData_courseWebDev"),
			level: t("educationSection.educationData_levelWebDev"),
			institution: t("educationSection.educationData_institutionWebDev"),
			period: t("educationSection.educationData_periodWebDev"),
			about: t("educationSection.educationData_aboutWebDev")
		},
		{
			course: t("educationSection.educationData_courseExplorer"),
			level: t("educationSection.educationData_levelExplorer"),
			institution: t("educationSection.educationData_institutionExplorer"),
			period: t("educationSection.educationData_periodExplorer"),
			about: t("educationSection.educationData_aboutExplorer")
		}
	]

	return educationData;
}
