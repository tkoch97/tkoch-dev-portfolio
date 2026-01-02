import { useTranslation } from "react-i18next"

export function ProjectsData() {

const {t} = useTranslation();

const projectsData = [
    {
      title: 'Food Explorer',
      image: `https://i.pinimg.com/736x/bc/25/b5/bc25b541301760cc63621681af25ff16.jpg`,
      description: t("projectsSection.projectsData_descriptionFoodExplorer"),
      tecnologies: ["JavaScript", "React", "Styled Components", "NodeJs", "SQLite", "Knex", "ViteJs"],
      repository: `https://github.com/tkoch97/food-explorer-front`,
      deploy: `https://food-explorer-front-eosin.vercel.app/`
    },
    {
      title: 'Convite 15 anos',
      image: `https://i.pinimg.com/736x/5d/2b/8c/5d2b8c611c9d08fa70b53673d41da8fb.jpg`,
      description: t("projectsSection.projectsData_descriptionConvite15Anos"),
      tecnologies: ["JavaScript", "React", "SASS","ViteJs"],
      repository: `https://github.com/tkoch97/mariana15anos`,
      deploy: `https://mariana15anos.vercel.app/`
    },
    {
      title: 'Rocket Notes',
      image: `https://raw.githubusercontent.com/tkoch97/rocket-notes-front/main/public/github/img/preview.png`,
      description: t("projectsSection.projectsData_descriptionRocketNotes"),
      tecnologies: ["JavaScript", "React", "Styled Components", "NodeJs", "SQLite", "Knex", "ViteJs"],
      repository: `https://github.com/tkoch97/rocket-notes-front`,
      deploy: `https://rocketnotes-tkoch.netlify.app/`
    },
    {
      title: 'SP Labs',
      image: `https://raw.githubusercontent.com/tkoch97/SP-Labs/main/public/preview.png`,
      description: t("projectsSection.projectsData_descriptionSPLabs"),
      tecnologies: ["JavaScript", "React", "SASS", "ViteJs"],
      repository: `https://github.com/tkoch97/SP-Labs`,
      deploy: `https://sp-labs-six.vercel.app/`
    },
    {
      title: 'Pokémon Gallery',
      image: `https://raw.githubusercontent.com/tkoch97/pokemon-gallery/main/public/assets/github/preview_1.png`,
      description: t("projectsSection.projectsData_descriptionPokemonGallery"),
      tecnologies: ["JavaScript", "React", "Material UI", "CSS"],
      repository: `https://github.com/tkoch97/pokemon-gallery`,
      deploy: `https://pokemon-gallery-ten.vercel.app/`
    },
    {
      title: 'GitFav',
      image: `https://raw.githubusercontent.com/tkoch97/github-favorites/main/github/preview_2.png`,
      description: t("projectsSection.projectsData_descriptionGitFav"),
      tecnologies: ["HTML", "CSS", "JavaScript"],
      repository: `https://github.com/tkoch97/github-favorites`,
      deploy: `https://git-fav-tkoch97.vercel.app/`
    },
    {
      title: 'Focus Timer 2.1',
      image: `https://raw.githubusercontent.com/tkoch97/focus-timer-2.0/main/github/preview.png`,
      description: t("projectsSection.projectsData_descriptionFocusTimer2.1"),
      tecnologies: ["HTML", "CSS", "JavaScript"],
      repository: `https://github.com/tkoch97/focus-timer-2.1-dark-mode`,
      deploy: `https://focus-timer-2-1-dark-mode.vercel.app/`
    },
    {
      title: 'SPA Universe',
      image: `https://raw.githubusercontent.com/tkoch97/spa-universe/main/github/preview.png`,
      description: t("projectsSection.projectsData_descriptionSPAUniverse"),
      tecnologies: ["HTML", "CSS", "JavaScript"],
      repository: `https://github.com/tkoch97/spa-universe?tab=readme-ov-file`,
      deploy: `https://spa-universe-pma4pizqi-tkoch97.vercel.app/`
    },
  ]

  return projectsData;
}
