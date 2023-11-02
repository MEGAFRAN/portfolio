import type { NextPage } from "next"
import Head from "next/head"
import { useTranslation } from "next-i18next"
import PageHead from "../../app/components/page_head/PageHead"
import Header from "../../app/components/sections/above_fold/header/Header"
import SectionDottedCard from "../../app/components/sections/dotted_card/SectionDottedCard"
import SectionUnderlineList from "../../app/components/sections/underline_list/SectionUnderlineList"
import { getStaticPaths, makeStaticProps } from "../../lib/getStatic"
import FeedbackForm from "../../app/components/feedback/FeedbackForm"
import SectionTitleList from "../../app/components/sections/title_list/SectionTitleList"
import ChatBotToggle from "../../app/components/chatbot_toogle/ChatBotToogle"

const Home: NextPage = () => {
  const { t } = useTranslation(["pages/index"])

  return (
    <>
      <Head>
        <PageHead
          description={t("metatagDescription")}
          title={"Francisco cruz website"}
          locale={t("metatagLocale")}
          url={t("metatagUrl")}
        />
      </Head>
      <Header
        title={t("headerTitle", { returnObjects: true })}
        text={t("headerText", { returnObjects: true })}
        buttonText={t("headerButtons", { returnObjects: true })}
        sectionToScroll={"#contact-form"}
      />
      <SectionUnderlineList
        listData={t("listData2", { returnObjects: true })}
        title={t("careers")}
        buttonText={t("requestService")}
        sectionToScroll={t("sectionContact") as string}
      />
      <SectionDottedCard
        listData={t("listData3", { returnObjects: true })}
        title={t("softSkills")}
        buttonText={t("requestService")}
        sectionToScroll={t("sectionContact") as string}
      />
      <SectionTitleList
        title="Frontend"
        listData={[
          "Javascript",
          "Typescript",
          "Html",
          "Css",
          "Scss",
          "Less",
          "React",
          "Next js",
          "Angular",
          "Node js",
          "Jquery",
          "Rest api",
          "Graph QL",
          "SEO",
          "Web performance",
          "Accessibility",
          "Headless CMS",
        ]}
        text="This website is build with next js as a static site, is built with typescript, scss modules, is mobile first, doesn't use media queries, and has a score of 100 in accessibility, performance and SEO"
      />
      <SectionTitleList
        title="Analytics"
        listData={[
          "Datalayer",
          "Web events",
          "Google Analytics",
          "Google tag manager",
          "Tealium",
          "Adobe analytics",
          "Adobe launch",
        ]}
        text="This website has integrated google analytics, google tag manager, a datalayer and web events"
      />
      <SectionTitleList
        title="Cloud"
        listData={[
          "Azure",
          "GCP",
          "AWS",
          "Terraform",
          "Linux",
          "Serverless",
          "CI/CD",
          "Github actions",
        ]}
        text="This website is hosted in azure as a static web app, the backend are azure serverless functions in node js, and the CI/CD is set with github actions, the monetary cost of this infrastructure setting is $0"
      />
      <SectionTitleList
        title="AEM"
        listData={["AEM 6.5+", "HTL", "Sling", "Jcr", "Client libraries", "Components"]}
        text="99% of people don't know what is AEM. Well i'm an AEM frontend developer"
      />
      <SectionTitleList
        title="Medical"
        listData={[
          "Anamnesis",
          "Physical examination",
          "Medical records",
          "Prescription",
          "Application of medications",
        ]}
        text="Currently i'm the doctor of my family and close friends, i don't work anymore in this profession"
      />
      <SectionTitleList
        title="Poker"
        listData={[
          "6 cards Pot limit omaha",
          "5 cards Pot limit omaha",
          "Pot limit omaha",
          "Texas holdem",
        ]}
        text="At friends meetings, i bring the poker game and everyone enjoys. Sometimes i play online with real money"
      />
      <FeedbackForm />
      <ChatBotToggle />
    </>
  )
}

export default Home
// ns ---> is variable of next-i18next that should to have array strings these strings are names of files that we want to translate in this page
const ns = ["common", "components/text", "pages/index"]
const getStaticProps = makeStaticProps({ ns })
export { getStaticPaths, getStaticProps }
