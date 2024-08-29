import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LoopIcon from '@mui/icons-material/Loop';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import PaymentIcon from '@mui/icons-material/Payment';

const Features = () => {
  return (
    // <!-- start features Area -->
	<section class="features-area section_gap" style={{padding: '100px'}}>
		<div class="container">
			<div class="row features-inner">
				{/* <!-- single features --> */}
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-features">
						<div class="f-icon">
							{/* <img src="img/features/f-icon1.png" alt=""/> */}
                            <LocalShippingIcon style={{fontSize: '3rem'}}></LocalShippingIcon>
						</div>
						<h6>Miễn phí vận chuyển</h6>
						<p>khắp cả nước với đơn từ 0đ</p>
					</div>
				</div>
				{/* <!-- single features --> */}
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-features">
						<div class="f-icon">
                            <LoopIcon style={{fontSize: '3rem'}}></LoopIcon>
						</div>
						<h6>Cho phép đổi trả</h6>
						<p>với chính sách đổi trả đơn hàng</p>
					</div>
				</div>
				{/* <!-- single features --> */}
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-features">
						<div class="f-icon">
							{/* <img src="img/features/f-icon3.png" alt=""/> */}
                            <SupportAgentIcon style={{fontSize: '3rem'}}></SupportAgentIcon>
						</div>
						<h6>Tổng đài hỗ trợ</h6>
						<p>chăm sóc khách hàng 24/7</p>
					</div>
				</div>
				{/* <!-- single features --> */}
				<div class="col-lg-3 col-md-6 col-sm-6">
					<div class="single-features">
						<div class="f-icon">
							{/* <img src="img/features/f-icon4.png" alt=""/> */}
                            <PaymentIcon style={{fontSize: '3rem'}}></PaymentIcon>
						</div>
						<h6>Thanh toán đa dạng</h6>
						<p>với nhiều phương thức</p>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Features
