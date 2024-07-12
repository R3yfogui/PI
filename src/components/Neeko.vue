<script setup>
function reveal() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);


</script>

<template>
    <h1 class="reveal">SO HIGH TESTE</h1>
    <IMG src="../.."></IMG>
    


<body class="is-boxed has-animations">
    <div class="body-wrap boxed-container box-shadow">
        

        <main  style="background-color: #182538;">
            <section class="hero">
                
                <div class="container">
                    <img class=" teste-dos-cria" src="../../images/header-illustration-light.svg" alt="Header illustration">
                    <div class="teste">
						<div class="hero-copy">
	                        <h1 class="hero-title mt-0 reveal">Landing template for startups</h1>
	                        <p class="hero-paragraph reveal">Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.</p>
                            
	                        <div class="hero-cta ">
								<a class="button button-primary" href="#">Buy it now</a>
								<div class="lights-toggle">
									<input id="lights-toggle" type="checkbox" name="lights-toggle" class="switch" checked="checked">
									<label for="lights-toggle" class="text-xs"><span>Turn me <span class="label-text">dark</span></span></label>
								</div>
							</div>
                            
						</div>
                        <div>
                            <img class="hero-media-image reveal" src="../../images/hero-media-dark.svg" alt="">
                        </div>
						
							<div class="header-illustration">
                              
                                <img class=" teste-dos-cria" src="" alt="">
								
							
							<div class="hero-media-illustration">
								<img class="hero-media-illustration-image asset-dark" src="../../images/hero-media-illustration-dark.svg" alt="Hero media illustration">
								
							</div>
							<div class="hero-media-container">
								<img class="hero-media-image asset-dark" src="../../images/hero-media-dark.svg" alt="Hero media">
								
							</div>
						</div>
                    </div>
                </div>
            </section>

            <section class="features section">
                <div class="container">
					<div class="features-inner section-inner has-bottom-divider">
						<div class="features-header text-center">
							<div class="container-sm">
								<h2 class="section-title mt-0 reveal">The Product</h2>
	                            <p class="section-paragraph reveal">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
								<div class="features-image">
									<img class="features-illustration asset-dark reveal" src="../../images/features-illustration-dark.svg" alt="Feature illustration">
									<img class="features-box asset-dark reveal" src="../../images/features-box-dark.svg" alt="Feature box">
									<img class="features-illustration asset-dark reveal" src="../../images/features-illustration-top-dark.svg" alt="Feature illustration top">
									<img class="features-illustration asset-light reveal" src="../../images/features-illustration-dark.svg" alt="Feature illustration">
									<img class="features-box asset-light reveal" src="../../images/features-box-dark.svg" alt="Feature box">
									<img class="features-illustration asset-light reveal" src="../../images/features-illustration-dark.svg" alt="Feature illustration top">
								</div>
							</div>
                        </div>
                        <div class="features-wrap">
                            <div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img class="asset-light" src="../../images/feature-01-dark.svg" alt="Feature 01">
										<img class="asset-dark" src="../../images/feature-01-dark.svg" alt="Feature 01">
                                    </div>
									<div class="feature-content">
                                    	<h3 class="feature-title mt-0">Discover</h3>
                                    	<p class="text-sm mb-0 reveal">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
									</div>
								</div>
                            </div>
							<div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img class="asset-light" src="../../images/feature-02-dark.svg" alt="Feature 02">
										<img class="asset-dark" src="../../images/feature-02-dark.svg" alt="Feature 02">
                                    </div>
									<div class="feature-content">
                                    	<h3 class="feature-title mt-0">Discover</h3>
                                    	<p class="text-sm mb-0 reveal">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
									</div>
								</div>
                            </div>
							<div class="feature is-revealing">
                                <div class="feature-inner">
                                    <div class="feature-icon">
										<img class="asset-light" src="../../images/feature-03-dark.svg" alt="Feature 03">
										<img class="asset-dark" src="../../images/feature-03-dark.svg" alt="Feature 03">
                                    </div>
									<div class="feature-content">
                                    	<h3 class="feature-title mt-0">Discover</h3>
                                    	<p class="text-sm mb-0">Lorem ipsum dolor sit amet, consecte adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui.</p>
									</div>
								</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

			<section class="cta section">
                <div class="container-sm">
                    <div class="cta-inner section-inner">
                        <div class="cta-header text-center">
                            <h2 class="section-title mt-0">Get it and Switch</h2>
                            <p class="section-paragraph">Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.</p>
							<div class="cta-cta">
								<a class="button button-primary" href="#">Buy it now</a>
							</div>
					    </div>
                    </div>
                </div>
            </section>
        </main>

        <footer class="site-footer has-top-divider">
            <div class="container">
                <div class="site-footer-inner">
                    <div class="brand footer-brand">
                        <a href="#">
							<img class="asset-light" src="../../images/logo-dark.svg" alt="Logo">
							<img class="asset-dark" src="../../images/logo-dark.svg" alt="Logo">
                        </a>
                    </div>
                    <ul class="footer-links list-reset">
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">FAQ's</a>
                        </li>
                        <li>
                            <a href="#">Support</a>
                        </li>
                    </ul>
                    <ul class="footer-social-links list-reset">
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Facebook</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Twitter</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span class="screen-reader-text">Google</span>
                                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFF"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div class="footer-copyright">&copy; 2018 Switch, all rights reserved</div>
                </div>
            </div>
        </footer>
    </div>

    
</body>


</template>

<style lang="scss">

@import 'style.css';

.reveal{

transform: translateY(150px);
opacity: 0;
transition: 1s all ease;
}

.reveal.active{
transform: translateY(0);
opacity: 1;
}

.box-shadow {
    box-shadow: 0 16px 48px rgba(0, 0, 0, 0.2);
}

.asset-dark{
    visibility:hidden;
    opacity:0}
.is-loaded 
.asset-light,
.is-loaded 
.asset-dark{
    visibility:visible;
    opacity:1}
.asset-dark{display:none}
.lights-off{color:#8595AE}
.lights-off 
.asset-light{display:none}
.lights-off 
.asset-dark{display:block}

.teste-dos-cria{
    
    width: 1000px;
}

.teste {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    
   
}

.hero-media-image {
    margin: 0 auto;
    box-shadow: 48px 16px 48px rgba(24, 37, 56, 0.12);
    border-radius: 4px;
    box-shadow: 48px 16px 48px rgba(0, 0, 0, 0.2);
    transform: perspective(1000px) rotateY(16deg) rotateX(2deg) rotateZ(-7deg) scaleY(0.95) translatex(2%) ease;
}
</style>