import { SectionTitleListProps } from "../../../constants/types/components_props/types"
import List from "../../list/List"
import styles from "../../../styles/sections/title-list.module.scss"

const SectionTitleList = ({ title, listData, text, id }: SectionTitleListProps) => (
  <section className={styles.container} id={id}>
    <h2>{title}</h2>
    <List listData={listData} />
    {text ? <p>{text}</p> : null}
  </section>
)
export default SectionTitleList
