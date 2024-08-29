import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

const testimonialsData = [
    {
        id: 1,
        name: 'John Wills',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur non earum repudiandae ipsa reprehenderit quaerat, quo a cupiditate, voluptatibus voluptates, dolores nam accusantium error, modi iure itaque totam labore.',
        designation: 'Manager'
    },
    {
        id: 2,
        name: 'Jasmine Perry',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, magni fugiat eveniet minus perspiciatis! Nostrum laborum maxime consequuntur repellat nam magni, quae incidunt distinctio enim itaque eligendi laboriosam, quod',
        designation: 'Accountant'
    },
    {
        id: 3,
        name: 'Rocky Johnson',
        description: 'Lorem ffffff vsdfdf ipsum dolor sit amet, consectetur adipisicing elit. Laudantium facilis optio porro omnis alias eaque corporis error est ut, reprehenderit quae asperiores illum quo voluptates debitis non. Repellat fugit, asperiores?',
        designation: 'CEO'
    }
];

function Testimonial() {
    return (
        <section id="testimonials" className="testimonials-block text-center"
            style={{
                padding: '120px',
                backgroundImage: `url('https://wallpapercave.com/wp/wp12824696.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}>
            <Container style={{ maxWidth: '70rem' }} fluid>
                <div style={{ margin: '2rem 0' }} className="title-holder">
                    <h1>ĐÁNH GIÁ TỪ KHÁCH HÀNG</h1>
                    <div className="subtitle">sự hài lòng mà FASHION đã mang đến cho khách hàng</div>
                </div>
                <Carousel controls={false} data-bs-theme="dark">
                    {
                        testimonialsData.map(testimonial => (
                            <Carousel.Item key={testimonial.id}>
                                <blockquote>
                                    <p>{testimonial.description}</p>
                                    <footer>
                                        <span className="name">{testimonial.name}</span>
                                        <span className="designation">{testimonial.designation}</span>
                                    </footer>
                                </blockquote>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
            </Container>
        </section>
    );
}

export default Testimonial;
