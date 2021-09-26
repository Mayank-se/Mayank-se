import React, { Component } from 'react';
import './Layout.css';
export default class Home extends Component {

    render() {
        return (
            <html lang="">
                <head>
                    <title>Nocobot</title>

                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
                </head>
                <body id="top" style={{position:'absolute',left:0,top:65}}  >
                    <div class="wrapper row0">
                        <div id="topbar" class="hoc clear">
                            <div class="fl_left">lik
                                <ul class="nospace">
                                    <li><i class="fas fa-phone rgtspace-5"></i> +00 (123) 456 7890</li>
                                    <li><i class="far fa-envelope rgtspace-5"></i> info@domain.com</li>
                                </ul>
                            </div>
                            <div class="fl_right">
                                <ul class="nospace">
                                    <li><i class="fas fa-sign-in-alt"></i></li>
                                    <li>><i class="fas fa-edit"></i></li>
                                    <li id="searchform">
                                        <div>
                                            <form action="#" method="post">
                                                <fieldset>
                                                    <legend>Quick Search:</legend>
                                                    <input type="text" placeholder="Enter search term&hellip;" />
                                                    <button type="submit"><i class="fas fa-search"></i></button>
                                                </fieldset>
                                            </form>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="bgded" >

                        <div class="wrapper row1">
                            <header id="header" class="hoc clear">
                                <div id="logo" class="fl_left">
                                    <h1><a href="index.html">Nocobot</a></h1>
                                </div>
                                <nav id="mainav" class="fl_right">
                                    <ul class="clear">
                                        <li class="active"><a href="index.html">Home</a></li>
                                        <li>Pages
                                            <ul>
                                                <li><a href="pages/gallery.html">Gallery</a></li>
                                                <li><a href="pages/full-width.html">Full Width</a></li>
                                                <li><a href="pages/sidebar-left.html">Sidebar Left</a></li>
                                                <li><a href="pages/sidebar-right.html">Sidebar Right</a></li>
                                                <li><a href="pages/basic-grid.html">Basic Grid</a></li>
                                                <li><a href="pages/font-icons.html">Font Icons</a></li>
                                            </ul>
                                        </li>
                                        <li>Dropdown
                                            <ul>
                                                <li>Level 2</li>
                                                <li><p class="drop" >Level 2 + Drop</p>
                                                    <ul>
                                                        <li>Level 3</li>
                                                        <li>Level 3</li>
                                                        <li>Level 3</li>
                                                    </ul>
                                                </li>
                                                <li>Level 2</li>
                                            </ul>
                                        </li>
                                        <li>Link Text</li>
                                        <li>Link Text</li>
                                        <li>Link Text</li>
                                    </ul>
                                </nav>
                            </header>
                        </div>
                        <div class="overlay">
                            <div id="pageintro" class="hoc clear">
                                <article>
                                    <h3 class="heading">Dapibus ligula convallis</h3>
                                    <p>A massa etiam augue nunc lectus duis eget libero non nisi lobortis suscipit praesent viverra nam dapibus orci non erat aliquam erat volutpat.</p>
                                    <footer><p class="btn" >Gravida sem neque</p></footer>
                                </article>
                            </div>
                        </div>
                    </div>
                    <div class="wrapper row3">
                        <main class="hoc container clear">
                            <section id="introblocks">
                                <ul class="nospace group btmspace-80">
                                    <li class="one_third first">
                                        <figure><p class="imgover" ><img src="images/demo/348x400.png" alt="" /></p>
                                            <figcaption>
                                                <h6 class="heading">Mollis suscipit</h6>
                                               
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="one_third">
                                        <figure><p class="imgover" ><img src="images/demo/348x400.png" alt="" /></p>
                                            <figcaption>
                                                <h6 class="heading">Vestibulum maecenas</h6>
                                                
                                            </figcaption>
                                        </figure>
                                    </li>
                                    <li class="one_third">
                                        <figure><p class="imgover" ><img src="images/demo/348x400.png" alt="" /></p>
                                            <figcaption>
                                                <h6 class="heading">Pellentesque enim</h6>
                                                
                                            </figcaption>
                                        </figure>
                                    </li>
                                </ul>
                            </section>

                            <hr class="btmspace-80" />
                            <section class="group">
                                <div class="one_half first"><img class="inspace-15 borderedbox" src="images/demo/474x356.png" alt="" /></div>
                                <div class="one_half">
                                    <ul class="nospace group inspace-15">
                                        <li class="one_half first btmspace-50">
                                            
                                        </li>
                                        <li class="one_half btmspace-50">
                                            
                                        </li>
                                        <li class="one_half first">
                                       
                                        </li>
                                        <li class="one_half">
                                           
                                        </li>
                                    </ul>
                                </div>
                            </section>

                            <div class="clear"></div>
                        </main>
                    </div>
                    <div class="bgded overlay" >
                        <figure class="hoc container clear imgroup">
                            <figcaption class="sectiontitle">
                                <p class="nospace font-xs">Pulvinar sem eu tincidunt magna</p>
                                <p class="heading underline font-x2">Nulla eu turpis curabitur</p>
                            </figcaption>
                            <ul class="nospace group">
                                <li class="one_third"><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p></li>
                                <li class="one_third"><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p></li>
                                <li class="one_third"><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p></li>
                                <li class="one_third"><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p></li>
                                <li class="one_third"><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p></li>
                                <li class="one_third"><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p></li>
                            </ul>
                        </figure>
                    </div>
                    <div class="wrapper row2">
                        <div class="hoc container clear">

                            <div class="sectiontitle">
                                <p class="nospace font-xs">Vel lorem quis arcu euismod faucibus</p>
                                <p class="heading underline font-x2">Quisque luctus nullam eget</p>
                            </div>
                            <ul class="nospace group team">
                                <li class="one_quarter first">
                                    <figure><p class="imgover" ><img src="images/demo/300x300.png" alt="" /></p>
                                        <figcaption><strong>A. Doe</strong> <em>Job Title Here</em></figcaption>
                                    </figure>
                                </li>
                                <li class="one_quarter">
                                    <figure><p class="imgover" ><img src="images/demo/300x300.png" alt="" /></p>
                                        <figcaption><strong>B. Doe</strong> <em>Job Title Here</em></figcaption>
                                    </figure>
                                </li>
                                <li class="one_quarter">
                                    <figure><p class="imgover" ><img src="images/demo/300x300.png" alt="" /></p>
                                        <figcaption><strong>C. Doe</strong> <em>Job Title Here</em></figcaption>
                                    </figure>
                                </li>
                                <li class="one_quarter">
                                    <figure><p class="imgover" ><img src="images/demo/300x300.png" alt="" /></p>
                                        <figcaption><strong>D. Doe</strong> <em>Job Title Here</em></figcaption>
                                    </figure>
                                </li>
                            </ul>

                        </div>
                    </div>

                    <div class="wrapper row3">
                        <figure class="hoc container clear clients">
                            <figcaption class="sectiontitle">
                                <p class="nospace font-xs">Nisl donec eu neque nisi molestie</p>
                                <p class="heading underline font-x2">Pellentesque donec ut dolor</p>
                            </figcaption>
                            <ul class="nospace group">
                                <li class="one_quarter first"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                                <li class="one_quarter"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                                <li class="one_quarter"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                                <li class="one_quarter"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                                <li class="one_quarter first"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                                <li class="one_quarter"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                                <li class="one_quarter"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                                <li class="one_quarter"><p class="imgover" ><img src="images/demo/249x100.png" alt="" /></p></li>
                            </ul>
                        </figure>
                    </div>

                    <div class="wrapper bgded overlay" >
                        <section id="testimonials" class="hoc container clear">
                            <div class="sectiontitle">
                                <p class="nospace font-xs">Imperdiet at rhoncus vitae ante sed</p>
                                <p class="heading underline font-x2">Eu felis etiam et risus at</p>
                            </div>
                            <article class="btmspace-80">
                                <blockquote>Pellentesque ipsum pede malesuada non vulputate at euismod et lorem nullam tincidunt urna eget nisl eleifend vulputate sed vitae risus sed enim fermentum venenatis sed augue eros tempor sit amet.</blockquote>
                                <figure class="clear"><img src="images/demo/60x60.png" alt="" />
                                    <figcaption>
                                        <h6 class="heading">John Doe</h6>
                                        <em>CEO</em></figcaption>
                                </figure>
                            </article>
                            <footer class="center"><p class="btn" >More Testimonials</p></footer>
                        </section>
                    </div>
                    <div class="wrapper row3">
                        <section class="hoc container clear">
                            <div class="sectiontitle">
                                <p class="nospace font-xs">Felis dictum viverra mauris dui</p>
                                <p class="heading underline font-x2">Phasellus nunc erat cursus</p>
                            </div>
                            <ul id="latest" class="nospace group">
                                <li class="one_third first">
                                    <article><p class="imgover"><img src="images/demo/348x261.png" alt="" /></p>
                                        <ul class="nospace meta clear">
                                            <li><i class="fas fa-user"></i> <p >Admin</p></li>
                                            <li><i class="fas fa-comments"></i> <p >Comments (10)</p></li>
                                        </ul>
                                        <div class="excerpt clear">
                                            <h6 class="heading">Aliquet tincidunt vel vulputate egestas leo</h6>
                                            <time datetime="2045-04-05T08:15+00:00"><strong>05</strong> <em>Apr</em></time>
                                            <p>Integer id justo ut diam suscipit laoreet quisque bibendum dolor at ultricies vestibulum risus&hellip;</p>
                                        </div>
                                        <footer><p class="btn" >Read More</p></footer>
                                    </article>
                                </li>
                                <li class="one_third">
                                    <article><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p>
                                        <ul class="nospace meta clear">
                                            <li><i class="fas fa-user"></i> <p >Admin</p></li>
                                            <li><i class="fas fa-comments"></i> <p>Comments (10)</p></li>
                                        </ul>
                                        <div class="excerpt clear">
                                            <h6 class="heading">Dui eleifend elit ac ullamcorper libero tellus</h6>
                                            <time datetime="2045-04-04T08:15+00:00"><strong>04</strong> <em>Apr</em></time>
                                            <p>Vel turpis quisque blandit metus ut tellus in mauris vivamus faucibus vivamus egestas lobortis&hellip;</p>
                                        </div>
                                        <footer><p class="btn" >Read More</p></footer>
                                    </article>
                                </li>
                                <li class="one_third">
                                    <article><p class="imgover" ><img src="images/demo/348x261.png" alt="" /></p>
                                        <ul class="nospace meta clear">
                                            <li><i class="fas fa-user"></i> <p >Admin</p></li>
                                            <li><i class="fas fa-comments"></i> <p>Comments (10)</p></li>
                                        </ul>
                                        <div class="excerpt clear">
                                            <h6 class="heading">Odio curabitur id neque sed urna facilisis blandit</h6>
                                            <time datetime="2045-04-03T08:15+00:00"><strong>03</strong> <em>Apr</em></time>
                                            <p>Donec quis metus vel tortor porttitor pretium cras at justo nullam at lacus id metus pulvinar&hellip;</p>
                                        </div>
                                        <footer><p class="btn" >Read More</p></footer>
                                    </article>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="wrapper coloured">
                        <section id="ctdetails" class="hoc clear">
                            <ul class="nospace clear">
                                <li class="one_quarter first">
                                    <div class="block clear"><p ><i class="fas fa-phone"></i></p> <span><strong>Give us a call:</strong> +00 (123) 456 7890</span></div>
                                </li>
                                <li class="one_quarter">
                                    <div class="block clear"><p ><i class="fas fa-envelope"></i></p> <span><strong>Send us a mail:</strong> support@domain.com</span></div>
                                </li>
                                <li class="one_quarter">
                                    <div class="block clear"><p ><i class="fas fa-clock"></i></p> <span><strong> Monday - Saturday:</strong> 08.00am - 18.00pm</span></div>
                                </li>
                                <li class="one_quarter">
                                    <div class="block clear"><p ><i class="fas fa-map-marker-alt"></i></p> <span><strong>Come visit us:</strong> Directions to <p>our location</p></span></div>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <div class="bgded overlay row4" >
                        <footer id="footer" class="hoc clear">
                            <div class="one_quarter first">
                                <h6 class="heading">Pellentesque dictum</h6>
                                <ul class="nospace linklist">
                                    <li><p >Ultricies in molestie sed</p></li>
                                    <li><p >Consectetuer nam sodales</p></li>
                                    <li><p >Euismod tellus sed non</p></li>
                                    <li><p >Est etiam in eros curabitur</p></li>
                                    <li><p >Viverra dui nec arcu sed</p></li>
                                </ul>
                            </div>
                            <div class="one_quarter">
                                <h6 class="heading">Fermentum pellentesque</h6>
                                <p class="nospace btmspace-15">Pede ullamcorper facilisis bibendum nulla elit gravida elit vel suscipit urna.</p>
                                <form action="#" method="post">
                                    <fieldset>
                                        <legend>Newsletter:</legend>
                                        <input class="btmspace-15" type="text" value="" placeholder="Name" />
                                        <input class="btmspace-15" type="text" value="" placeholder="Email" />
                                        <button type="submit" value="submit">Submit</button>
                                    </fieldset>
                                </form>
                            </div>
                            <div class="one_quarter">
                                <h6 class="heading">Nisi nunc velit aliquam</h6>
                                <ul class="nospace linklist">
                                    <li>
                                        <article>
                                            <p class="nospace btmspace-10"><p >Sapien sit amet tortor nulla vulputate odio in varius tristique nisi urna.</p></p>
                                            <time class="block font-xs" datetime="2045-04-06">Friday, 6<sup>th</sup> April 2045</time>
                                        </article>
                                    </li>
                                    <li>
                                        <article>
                                            <p class="nospace btmspace-10"><p >Consequat erat id rutrum nisi magna vel tellus phasellus malesuada bibendum.</p></p>
                                            <time class="block font-xs" datetime="2045-04-05">Thursday, 5<sup>th</sup> April 2045</time>
                                        </article>
                                    </li>
                                </ul>
                            </div>
                            <div class="one_quarter">
                                <h6 class="heading">Lacinia iaculis nunc</h6>
                                <ul class="nospace clear latestimg">
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                    <li><p class="imgover" ><img src="images/demo/100x100.png" alt="" /></p></li>
                                </ul>
                            </div>
                        </footer>
                    </div>
                    <div class="wrapper row5">
                        <div id="copyright" class="hoc clear">
                            <p class="fl_left">Copyright &copy; 2018 - All Rights Reserved - <p >Domain Name</p></p>
                            <p class="fl_right">Template by <p target="_blank"  title="Free Website Templates">OS Templates</p></p>
                        </div>
                    </div>
                    <a id="backtotop" href="#top"><i class="fas fa-chevron-up"></i></a>
                    <script src="layout/scripts/jquery.min.js"></script>
                    <script src="layout/scripts/jquery.backtotop.js"></script>
                    <script src="layout/scripts/jquery.mobilemenu.js"></script>
                </body>
            </html>
        );
    }
}