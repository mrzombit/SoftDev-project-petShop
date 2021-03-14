import './home2.css'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fas, fab, far);


const Home2 = ()=> {
    return (
        <div>
            
            <nav>
                <ul class = 'menu'>
                    <li class = 'menu-logo'>Mysite</li>
                    <li class = 'menu-header'>หน้าหลัก</li>
                    <li class = 'menu-header'>เกี่ยวกับ</li>
                    <li class = 'menu-header'>ซื้อขาย</li>
                    <li class = 'menu-header'>บริจาค</li>
                    <li class = 'menu-header'>ติดต่อเรา</li>

                    <li class = 'logo-button'><a href='#'>Bell</a></li>
                    <li class = 'round-logo-button'><a href='#'>Profile</a></li>
                    <li class = 'toggle'><a href='#'><FontAwesomeIcon icon={['fas', 'bars']}/></a></li>

                </ul>
            </nav>
        </div>
    )
}   

export default Home2
















// const Home2 = ()=> {
//     return (
//         <div>
//         <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" rel="stylesheet" />
//         <section id="Bnavbar-bg">
//             <div class="container">
//                 <div class="row">
//                     <div class="col-md-3">
//                         <h1>Hello World</h1>
//                     </div>
//                     <div class="col-md-6">
//                         <h1>Hello World</h1>
//                     </div>
//                 </div>
//             </div>
//         </section>

//         </div>
//     )
// }   

// export default Home2

