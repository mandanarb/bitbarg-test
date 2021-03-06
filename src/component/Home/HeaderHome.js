import React from "react";
import "./HeaderHome.css";
import MenuIcon from "../ect/images/MenuIcon";
import order from "../ect/images/order.png";
import profile from "../ect/images/profile.png";
import Identity from "../ect/images/Identity.png";
import bitgap from "../ect/images/bitgap.png";
import price from "../ect/images/price.png";
import Wage from "../ect/images/Wage.png";
import Direction from "../ect/images/Direction.png";
import Notifications from "../ect/images/Notifications.png";
import wallet from "../ect/images/wallet.png";
import question from "../ect/images/question.png";
import comment from "../ect/images/comment.png";
import Relationship from "../ect/images/Relationship.png";
import bag from "../ect/images/bag.png";
import opportunity from "../ect/images/opportunity.png";
import about from "../ect/images/about.png";
import home from "../ect/images/home.png";
import { useState } from "react";

export default function HeaderHome() {
  const [showMenue, setShowMenue] = useState(false);
  const show = () => setShowMenue((showMenue) => !showMenue);

  return (
    <div className="main_navbar">
      <div className="main_navbar_container">
        <div className="service_button" onClick={show}>
          <MenuIcon />
          {/* <faIcone.CgMenuGridO  /> */}

          {/* show or hide menu use useState showMenu with treneryOperator */}
          {showMenue ? (
            <div className="service_dialog">
              <div className="service_container">
                <ul>
                  <li>
                    <a href="https://bitbarg.me/users/kyc">
                      <img width="70px" src={Identity} alt="Identity" />
                      <div className="service-title">احراز هویت</div>
                    </a>
                  </li>

                  <li>
                    <a href="https://bitbarg.me/profile/offers">
                      <img width="70px" src={order} alt="order" />
                      <div className="service-title">سفارشات</div>
                    </a>
                  </li>
                  {/* اگر در صفحاتی بغیر از هوم بود این دیو نمایش بده در منو
                  <li>
                    <a href="https://bitbarg.me/users/kyc">
                      <img width="70px" src={home} alt="home" />
                      <div className="service-title">خانه</div>
                    </a>
                  </li> */}
                  <li>
                    <a href="/Profile">
                      <img width="70px" src={profile} alt="profile" />
                      <div className="service-title">پروفایل</div>
                    </a>
                  </li>
                  <li>
                    <a href="/Wage">
                      <img width="70px" src={Wage} alt="Wage" />
                      <div className="service-title">کارمزدها</div>
                    </a>
                  </li>
                  <li>
                    <a href="/live-price">
                      <img width="70px" src={price} alt="Price" />
                      <div className="service-title">قیمت لحظه ای</div>
                    </a>
                  </li>
                  <li>
                    <a href="/bitgap">
                      <img width="70px" src={bitgap} alt="bitgap" />
                      <div className="service-title">بیت گپ</div>
                    </a>
                  </li>
                  <li>
                    <a href="/faq">
                      <img width="70px" src={question} alt="question" />
                      <div className="service-title">سوالات متداول</div>
                    </a>
                  </li>
                  <li>
                    <a href="/how-to-create-wallet">
                      <img width="70px" src={wallet} alt="wallet" />
                      <div className="service-title">ساخت کیف پول</div>
                    </a>
                  </li>
                  <li>
                    <a href="/alert">
                      <img
                        width="70px"
                        src={Notifications}
                        alt="Notifications"
                      />
                      <div className="service-title"> !بمن اطلاع بده</div>
                    </a>
                  </li>
                  <li>
                    <a href="/contact-us">
                      <img width="70px" src={Relationship} alt="Relationship" />
                      <div className="service-title">ارتباط با مدیریت</div>
                    </a>
                  </li>
                  <li>
                    <a href="/roadmap">
                      <img width="70px" src={Direction} alt="Direction" />
                      <div className="service-title"> مسیر بیت برگ</div>
                    </a>
                  </li>
                  <li>
                    <a href="/comment">
                      <img width="70px" src={comment} alt="comment" />
                      <div className="service-title"> نظرات کاربران</div>
                    </a>
                  </li>

                  <li>
                    <a href="/About">
                      <img width="70px" height="70" src={about} alt="about" />
                      <div className="service-title"> درباره ما</div>
                    </a>
                  </li>
                  <li>
                    <a
                      // target="_blank"
                      href="https://jobinja.ir/companies/bitbarg/jobs"
                    >
                      <img width="70px" src={opportunity} alt="opportunity" />
                      <div className="service-title"> فرصت های شغلی</div>
                    </a>
                  </li>
                  <li>
                    <a href="/bug-report">
                      <img width="70px" src={bag} alt="bag" />
                      <div className="service-title"> گزارش باگ</div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : null}
        </div>
        <a href="https://bitbarg.me/users/login" className="btn_login_a">
          <div className="btn_login">
            <div className="s1 word">ورود</div>
            {/* <div className="s2 word">ثبت نام</div> */}
          </div>
        </a>
      </div>
    </div>
  );
}