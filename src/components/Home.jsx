import React from 'react'

import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className='home' id="home">
                <main>
                    <h1>TechBoy</h1>
                    <p>Solution to all your Problems</p>
                </main>

            </div>

            <div className="home2">

                <img src={vg} alt="Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id="about">
                <div>
                    <h1>Who we are?</h1>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi vitae praesentium possimus distinctio sunt, aspernatur quisquam perferendis. Mollitia distinctio, consectetur natus sequi inventore deserunt? Quam iure iste, assumenda mollitia nihil aut, rem, eveniet asperiores itaque neque perspiciatis vel. Voluptates magni quos debitis officia. Maxime, distinctio autem sed dolorum vitae quo possimus error, nisi perferendis rem molestiae, suscipit fugit eos laboriosam! Voluptatibus doloribus cupiditate corrupti quod eos suscipit deleniti tempora quibusdam placeat. Distinctio enim nam quas quibusdam officia, laudantium cum officiis suscipit tempore temporibus excepturi neque at atque repellat natus voluptate amet aspernatur rem iure voluptates quidem veritatis ipsum consequuntur! Itaque dicta natus fugiat qui aliquid eveniet magnam laboriosam accusantium, placeat a quia, ab accusamus error!  </p>
                </div>
            </div>

            <div className="home4" id="brands">
                <div>
                    <h1>Brands</h1>

                    <article>

                        <div style={{
                            animationDelay:"0.3s",

                        }}>
                            <AiFillGoogleCircle/>
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:"0.5s",

                        }}>
                            <AiFillAmazonCircle/>
                            <p>Amazon</p>
                        </div>

                        <div style={{
                            animationDelay:"0.7s",

                        }}>
                            <AiFillYoutube/>
                            <p>Youtube</p>
                        </div>

                        <div style={{
                            animationDelay:"1s",

                        }}>
                            <AiFillInstagram/>
                            <p>Instagram</p>
                        </div>


                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
