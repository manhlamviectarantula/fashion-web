import Carousel from 'react-bootstrap/Carousel';

function SlideShow() {
    return (
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
                <img style={{ height: '90vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://im.uniqlo.com/global-cms/spa/resaa95ad394cb216f740132b511f1e145afr.jpg"
                    alt="First slide"
                />
                <Carousel.Caption style={{fontSize: '1rem', width: '20rem', bottom: '15rem', backgroundColor: 'rgba(255, 255, 255, 0.521)', border: '1px solid black', borderRadius: '0.5rem'}}>
                    <h3>AIRism ÁO POLO</h3>
                    <p>Chất liệu vải cứng cáp, kiểu dáng đẹp mắt với thiết kế thoáng mát</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '90vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://im.uniqlo.com/global-cms/spa/res2b90b02a4c852af50c9003942edd4e46fr.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption style={{fontSize: '1rem', width: '20rem', bottom: '15rem', backgroundColor: 'rgba(255, 255, 255, 0.521)', border: '1px solid black', borderRadius: '0.5rem'}}>
                    <h3>DRY-EX Áo Polo Cổ Trụ</h3>
                    <p>Chất vải nhanh khô, hút ẩm tốt
                        giúp bạn luôn cảm thấy thoải mái suốt ngày dài.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '90vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://im.uniqlo.com/global-cms/spa/resd24ed9d71477513faf867ee30e1db471fr.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption style={{fontSize: '1rem', width: '20rem', bottom: '15rem', backgroundColor: 'rgba(255, 255, 255, 0.521)', border: '1px solid black', borderRadius: '0.5rem'}}>
                    <h3>AIRism Cotton Áo Polo Vải Gân</h3>
                    <p>
                        Chất liệu vải gân với thiết kế thoải mái.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img style={{ height: '90vh', objectFit: 'cover' }}
                    className="d-block w-100"
                    src="https://im.uniqlo.com/global-cms/spa/res25ffb5fcf40e3c3d5ec1717ac04489cafr.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption style={{fontSize: '1rem', width: '20rem', bottom: '15rem', backgroundColor: 'rgba(255, 255, 255, 0.521)', border: '1px solid black', borderRadius: '0.5rem'}}>
                    <h3>Quần Dệt Kim Vải Gân</h3>
                    <p>
                        Chất liệu có thể giặt máy với
                        kết cấu mềm mại và không gây ngứa.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SlideShow;