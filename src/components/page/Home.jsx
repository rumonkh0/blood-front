import React from 'react'
import style from "../layout/style.module.css"

function Home() {

    const { herosec, left, right, btn1, btnmenu} = style

  return (
    <header>
        
        <div class={herosec}>
            <div class={left}>
                <h5>
                    Donate Blood Save Life!
                </h5>
                <h1>YOUR BLOOD <br/> CAN BRING SMILE <br/> IN OTHER PERSON FACE</h1>
                <div class={btnmenu}>
                    <div id="btn2" class={btn1}>
                        <li><a href="reg.html">Join as Blood Donor</a></li>

                    </div>
                    <div id="btn3" class={btn1}>
                        <li><a href=""> Search Blood Donors</a></li>

                    </div>
                </div>
            </div>
            <div class={right}>
                <img src="../img/new vector.jpg" alt=""/>
            </div>


        </div>

    </header>
  )
}

export default Home