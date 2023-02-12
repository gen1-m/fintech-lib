// import React from 'react';
import './Home.css';
import reportWebVitals from './reportWebVitals';
import { ibcmLogoWhite } from '.';
import { book_1 } from '.';
import { book_2 } from '.';
import { book_3 } from '.';
import { book_4 } from '.';
import { book_5 } from '.';
import { book_6 } from '.';
import { book_7 } from '.';
import { book_8 } from '.';
import { book_9 } from '.';
import { book_10 } from '.';
import { book_11 } from '.';
import { book_12 } from '.';
import { book_13 } from '.';  


function Home() {
    
    return (
        <div>
        <ul class="navbar_cv-list">
            <li class="navbar_cv-item">
                <a href="#"><img src = {ibcmLogoWhite} alt = "IBCM"/>
                </a>
            </li>
            <li class="navbar_cv-item" id="current_tab">
                <a href="/dashboard">User</a>
            </li>
            <li class="navbar_cv-item">
                <a href="#">About</a>
            </li>
            <li class="navbar_cv-item">
                <a href="#">Contact</a>
            </li>
            
            <li class="navbar_cv-item">
                <form class="searchContainer" action="processSearch.php">
                    <input type="text" placeholder="Book.." name="searchBar"/>
                </form>
            </li>
        </ul>

        <br/><br/><br/>

        <div className="flex-container">
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1AZRPVoifoLjTv_aQbfLUHowC7FsjLvaI/view"><img className="box-img" src={book_1} alt="Accounting_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1WdYv8m83e5_RBBVdonYfjtJSX7QGL6sd/view"><img className="box-img" src={book_2} alt="Budgeting_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1B8CpWsMurie_uGcZQ54JxRVPL7GGIHvg/view"><img className="box-img" src={book_3} alt="DayTrading_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1Ddk5jcQYN85cJlRDSLOhxbjjw2R7eLf3/view"><img className="box-img" src={book_4} alt="Debt_101" title=""/></a>
            </div>

            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1Xq31OCvkRVH8zjFPvgdrirYOGqOiIVy1/view"><img className="box-img" src={book_5} alt="Economics_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1JFubhW1eH2zDGbDCIBUBvkONzc-Twjun/view"><img className="box-img" src={book_6} alt="Investing_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/10VqYt2wS5qSHtkn3KaWBu3MBK0DpdTW5/view"><img className="box-img" src={book_7} alt="Management_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1eLDWzlMobrHhtC_8OWIH5vjPeb5NptuF/view"><img className="box-img" src={book_8} alt="Negotiating_101" title=""/></a>
            </div>

            <div className="flex-item">
                <a href="https://drive.google.com/file/d/16FIJ54WIj3WXpY3Op9f82d41_4QPwXQC/view"><img className="box-img" src={book_9} alt="PersonalFinance_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1aKUUG8e61-95fVE_Yr7JztpOUxJ0fDm_/view"><img className="box-img" src={book_10} alt="RealEstateInvesting_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1ERdfR9sJv3_UHjayuxOs1lO5e1e8lwNN/view"><img className="box-img" src={book_11} alt="Sales_101" title=""/></a>
            </div>
            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1--wfxuNamUSclY0DYYW-1M9YliWn1nKn/view"><img className="box-img" src={book_12} alt="Statistics_101" title=""/></a>
            </div>

            <div className="flex-item">
                <a href="https://drive.google.com/file/d/1_LUBeEtBlzMN1rlMCPjyJQldXYQVAkyw/view"><img className="box-img" src={book_13} alt="StockMarket_101" title=""/></a>
            </div>


            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
            <div className="flex-item"></div>
        </div>
    </div>

//             <div>
//                 <nav class="navbar background mt-3">
//                     <ul class="nav-list">
//                         <div class="logo">
//                             <img src="https://images.squarespace-cdn.com/content/v1/5f974a667b3b17424082088b/9951a1fe-0f59-4c4b-aa85-a2f32e23f82c/AN+IB%26CM+Project+%281%29.png" 
//                              alt = ""/>
//                         </div>
//                         <li><a href="./dashboard">Recommended Books</a></li>
//                         <li><a href="#tutorials">My Books</a></li>
//                     </ul>
//                     <div class="rightNav">
//                         <input type="text" name="search" id="search" />
//                         <button class="btn btn-sm">Search</button>
//                     </div>
//                 </nav>
    
//                 <section class="section">
//                     <div class="box-main">
//                         <div class="firstHalf">
//                             <h1 class="text-big mt-3">
//                                 7 Best Tips To Speed Up Your
//                                 Job Search in 2022
//                             </h1>
//                             <p class="text-small mt-3">
//                                 Hunting down a relevant job requires
//                                 proper techniques for showcasing your
//                                 potential to the employer. But with
//                                 the advent of COVID-19, it has become
//                                 a bit challenging and competitive to
//                                 reach out for your dream job. Many
//                                 individuals have lost their jobs
//                                 during these times, and on the other
//                                 hand, freshers are facing difficulties
//                                 while applying for a new job. But
//                                 there is no need for panic, you can
//                                 change your ways and streamline things
//                                 in a way that you get a proper result.
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//                 <section class="section">
//                     <div class="box-main">
//                         <div class="secondHalf">
//                             <h1 class="text-big" id="program">
//                                 JavaScript Tutorial
//                             </h1>
//                             <p class="text-small">
//                                 JavaScript is the world most popular
//                                 lightweight, interpreted compiled
//                                 programming language. It is also
//                                 known as scripting language for
//                                 web pages. It is well-known for
//                                 the development of web page many
//                                 non-browser environments also use
//                                 it. JavaScript can be used for
//                                 Client-side developments as well
//                                 as Server-side developments.
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//                 <section class="section">
//                     <div class="box-main">
//                         <div class="secondHalf">
//                             <h1 class="text-big" id="program">
//                                 Java Programming Language
//                             </h1>
//                             <p class="text-small">
//                                 When compared with C++, Java codes
//                                 are generally more maintainable
//                                 because Java does not allow many
//                                 things which may lead to
//                                 bad/inefficient programming if used
//                                 incorrectly. For example,
//                                 non-primitives are always references
//                                 in Java. So we cannot pass large
//                                 objects (like we can do in C++) to
//                                 functions, we always pass references
//                                 in Java. One more example, since there
//                                 are no pointers, bad memory access
//                                 is also not possible. When compared
//                                 with Python, Java kind of fits between
//                                 C++ and Python. The programs are written
//                                 in Java typically run faster than
//                                 corresponding Python programs and slower
//                                 than C++. Like C++, Java does static
//                                 type checking, but Python does not.
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//                 <section class="section">
//                     <div class="box-main">
//                         <div class="secondHalf">
//                             <h1 class="text-big" id="program">
//                                 What is Machine Learning?
//                             </h1>
//                             <p class="text-small">
//                                 Machine Learning is the field of study
//                                 that gives computers the capability to
//                                 learn without being explicitly
//                                 programmed. ML is one of the most exciting
//                                 technologies that one would have ever
//                                 come across. As it is evident from the
//                                 name, it gives the computer that makes
//                                 it more similar to humans: The ability
//                                 to learn. Machine learning is actively
//                                 being used today, perhaps in many more
//                                 places than one would expect.
//                             </p>
//                         </div>
//                     </div>
//                 </section>
//                 <footer className="footer">
//                     <p className="text-footer">
//                         Copyright ©-All rights are reserved
//                     </p>
//                 </footer>
//             </div>
        )
}

export default Home;
