import styles from './Contact.module.scss'
import ContactForm from '../../forms/contact'
const ContactPage = () => {
    return (
        <div className={styles.contactPageContents}>
            <h1> Let&apos;s work!</h1>
            <h4>Drop a message and I&apos;ll respond as soon as possible.</h4>
            <br />
            <ContactForm />
        </div>
    )
}
export default ContactPage
