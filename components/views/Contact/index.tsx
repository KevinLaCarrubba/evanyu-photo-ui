import styles from './Contact.module.scss'
import ContactForm from '../../forms/contact'
const ContactPage = () => {
    return (
        <div className={styles.contactPageContents}>
            <h1>Contact</h1>
            <h4> Let's work!</h4>
            <h4>Drop a message and I'll respond as soon as possible.</h4>
            <br />
            <ContactForm />
        </div>
    )
}
export default ContactPage
