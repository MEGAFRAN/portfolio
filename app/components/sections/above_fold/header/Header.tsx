import styles from "../../../../styles/sections/header.module.scss"
import { HeaderProps } from "../../../../constants/types/components_props/types"
import LoginForm from "../../../login_form/login_form"
import Navbar from "../navbar/Navbar"
import Button from "../../../button/Button"

const Header = ({ title, text, buttonText, sectionToScroll, withMagicLink }: HeaderProps) => {
  const [buttonHero, ...resButton] = buttonText || []
  return (
    <header className={styles.container}>
      <Navbar
        buttonText={resButton}
        mail={"info@clubtal.com"}
        withToogleMenu={false}
        withLanguageToggle={false}
        withLoginButton={false}
        withContactButton={true}
        withHomeButton={false}
        sectionToScroll={sectionToScroll}
      />

      <h1>
        {title[0]} <em>{title[1]}</em> {title[2]}
      </h1>

      <p>{text[0]}</p>

      <div className={styles.cta_wrapper}>
        {withMagicLink ? (
          <LoginForm />
        ) : (
          <div className={styles.buttons}>
            <Button text="Contact" style="cta" scrollToSection={"#contact-form"} />
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
