import styles from '../../../../styles/components/navbar.module.scss'
import { Button } from '../../../button/Button'
import { LanguageToogle } from '../../../language_toogle/LanguageToogle'

export const Navbar = ({ options, setIsEnglishText }: any) => {

    let optionsList = options.map(({ name, link }: any) => (

        <li tabIndex={0} key={name} className={styles.dropdown_option}>

            <a href={link}>{name}</a>
            
        </li>
    ))


    return (

        <nav tabIndex={0} className={styles.container}>

            <span className={styles.title}>Menu</span> 

            <LanguageToogle setIsEnglishText={setIsEnglishText}/>

            <div className={styles.dropdown}>

                <ul>

                    {options ? optionsList : null}
                    
                </ul>

                <Button text="Contactanos" style='cta' />
                
            </div>
            
        </nav>
   
    )

}