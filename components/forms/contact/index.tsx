import { useState } from 'react'
import { useForm } from 'react-hook-form'
import styles from './ContactForm.module.scss'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

type FormValues = {
    firstName: string
    lastName: string
    email: string
    message: string
}

const ContactForm = () => {
    const { register, handleSubmit, resetField } = useForm<FormValues>()
    const [showMessage, setShowMessage] = useState(false)

    const handleReset = () => {
        resetField('firstName')
        resetField('lastName')
        resetField('email')
        resetField('message')
    }
    const onSubmit = handleSubmit(data => {
        console.log(data)
        handleReset()
    })

    return (
        <>
            <form onSubmit={onSubmit} className={styles.form}>
                <div className={styles.formContent}>
                    {/* <h2>Name</h2> */}
                    <div className={styles.Input}>
                        <input
                            type="text"
                            id="input"
                            className={styles.InputText}
                            placeholder="First Name*"
                            {...register('firstName')}
                            required
                        />
                        <label htmlFor="input" className={styles.InputLabel}>
                            First Name
                        </label>
                    </div>
                    <div className={styles.Input}>
                        <input
                            type="text"
                            id="input"
                            className={styles.InputText}
                            placeholder="Last Name*"
                            {...register('lastName')}
                            required
                        />
                        <label htmlFor="input" className={styles.InputLabel}>
                            Last Name
                        </label>
                    </div>
                    <div className={styles.Input}>
                        <input
                            type="email"
                            id="input"
                            className={styles.InputText}
                            placeholder="Email*"
                            {...register('email')}
                            required
                        />
                        <label htmlFor="input" className={styles.InputLabel}>
                            Email
                        </label>
                    </div>
                    <div className={styles.Input}>
                        <input
                            type="text"
                            id="input"
                            className={styles.InputText}
                            placeholder="Message*"
                            {...register('message')}
                            required
                        />
                        <label htmlFor="input" className={styles.InputLabel}>
                            Message
                        </label>
                    </div>
                </div>
                <button className={styles.button}>Send</button>
            </form>
            <div className={styles.socialLinks}>
                <BsInstagram className={styles.socialIcon} />
                <BsLinkedin className={styles.socialIcon} />
            </div>

            <h1 style={{ display: 'none' }}>
                Thanks for reaching out. <br /> Will get back to you asap via
                email.
                <br />
                Liverpool F.C.
            </h1>
        </>
    )
}

export default ContactForm
