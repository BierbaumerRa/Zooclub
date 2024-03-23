//define custom elements for reusablity

class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                         <!-- ***** Logo Start ***** -->
                        <div>
                            <a href="index.html" class="logo"><img src="assets/images/Logo_5.png" alt="" witdh="78" height="78"></a>
                        </div>
                        <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** -->
                        <ul class="nav">
                            <li><a href="index.html" class="active">Home</a></li>
                            <li><a href="about-us.html">Über Uns</a></li>
                            <!-- <li><a href="rent-venue.html">Rent Venue</a></li> -->
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        <!-- ***** Menu End ***** -->
                    </nav>
                </div>
            </div>
        </div>
    </header>`
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="address">
                        <h4>ZooClub Addresse</h4>
                        <span>Waagplatz 7<br>9020 Klagenfurt<br>Österreich</span>
                    </div>
                </div>
                <div class="col-lg-4">
                    
                </div>
                <div class="col-lg-4">
                    <div class="hours">
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="sub-footer">
                        <div class="row">
                            <div class="col-lg-3">
                                <div>
                                    <a href="index.html" class="logo"><img src="assets/images/Logo_4.png" alt="" witdh="78" height="78"></a>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="menu">
                                </div>
                            </div>
                            <div class="col-lg-3">
                                <div class="social-links">
                                    <ul>
                                        <!-- <li><a href="#"><i class="fa fa-telegram"></i></a></li> -->
                                        <li><a href="https://www.facebook.com/ZooClub9020"><i class="fa fa-facebook"></i></a></li>
                                        <li><a href="https://www.instagram.com/zoo.club9020?utm_source=qr&igsh=YWRhMTFldTAybWwy"><i class="fa fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>`
    }
}

customElements.define('my-footer', MyFooter)