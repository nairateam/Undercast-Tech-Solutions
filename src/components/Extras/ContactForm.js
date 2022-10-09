import './ContactForm.css';

function ContactForm() {
    return (
        <div className='form__wrapper'>
            <p>
            Reach out to us at Undercast Tech Solutions.
            </p>
            <h3>
            Let Us Collaborate Now!
            </h3>
            <form>
                <div className='form__control'>
                    <label>Full Name</label>
                    <input type='text' placeholder='Full Name' />
                </div>
                <div className='form__control'>
                    <label>E-mail</label>
                    <input type='email' placeholder='E-mail' />
                </div>
                <div className='form__control'>
                    <label>Valid Phone Number</label>
                    <input type='tel' placeholder='Phone Number' />
                </div>
                <div className='form__control'>
                    <label>Select Service</label>
                    <select name='services'>
                        <option value='Web development'>Web Development</option>
                        <option value='Ui/Ux Design'>Ui/Ux Design</option>
                        <option value='SEO'>SEO</option>
                        <option value='Graphic Design'>Graphic Design</option>
                        <option value='Mobile App'>Mobile App Development</option>
                    </select>
                </div>
                <div className='form__control'>
                    <label>Project Budget</label>
                    <input type='tel' placeholder='$' />
                </div>
                <div className='form__control'>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
};

export default ContactForm;