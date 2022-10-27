import './ContactForm.css';
import { useFormik } from 'formik';

function ContactForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            services: '',
            budget: '$'
        },
        onSubmit: values=>{
            console.log('form data', values)
        }
    })

    return (
        <div className='form__wrapper'>
            <p>
            Reach out to us at Undercast Tech Solutions.
            </p>
            <h3>
            Let Us Collaborate Now!
            </h3>
            <form onSubmit={formik.handleSubmit}>
                <div className='form__control'>
                    <label>Full Name</label>
                    <input type='text' id='name' placeholder='Full Name' 
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    />
                </div>
                <div className='form__control'>
                    <label>E-mail</label>
                    <input type='email' placeholder='E-mail' id='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    />
                </div>
                <div className='form__control'>
                    <label>Valid Phone Number</label>
                    <input type='tel' placeholder='Phone Number' id='phone'
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                     />
                </div>
                <div className='form__control'>
                    <label>Select Service</label>
                    <select name='services' id='services'
                    onChange={formik.handleChange}
                    value={formik.values.services}>
                        <option value='Web development'>Web Development</option>
                        <option value='Ui/Ux Design'>Ui/Ux Design</option>
                        <option value='SEO'>SEO</option>
                        <option value='Graphic Design'>Graphic Design</option>
                        <option value='Mobile App'>Mobile App Development</option>
                    </select>
                </div>
                <div className='form__control'>
                    <label>Project Budget</label>
                    <input type='text' placeholder='$' id='budget'
                    onChange={formik.handleChange}
                    value={formik.values.budget}
                    />
                </div>
                <div className='form__control'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default ContactForm;