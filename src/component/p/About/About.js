import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="container-About">
    
      <div className="title-blue-header">
        <h1 className="bluee">درباره ما</h1>
      </div>
      <div className="parent-container-box-about-page">
        <div className="container-box-about-page">
          <div className="left-box">
            <div class="col-lg-7">
              <ul className="ul-contact-us">
                <li className="li-title-head"> :ساعات پاسخگویی</li>
                <li> روز هفته ، ۲۴ ساعت شبانه&zwnj;روز پاسخگوی شما هستیم۷</li>
                <li>
                  <a className="bb6473" href="tel:02191079677">
                    021-91079677
                  </a>
                </li>

                <li className="li-title-head">:زمان خرید و فروش</li>
                <li>۷ روز هفته ، ۲۴ ساعت شبانه&zwnj;روز پاسخگوی شما هستیم</li>
                <li className="li-title-head">:زمان احراز هویت</li>
                <li>همه روزه حتی در ایام تعطیل از ساعت ۸صبح تا ۱۷ عصر</li>
                <li className="li-title-head">:علامت تجاری</li>
                <li>
                  به موجب اظهارنامه ثبت علامت تجاری به شماره ۱۳۹۸۵۰۱۴۰۰۰۱۰۴۰۷۸۳
                  علامت تجاری "بیت برگ" در مرکز مالکیت معنوی ج.ا ثبت گردیده است.
                </li>
                <li className="li-title-head">:آدرس</li>
                <li>
                  {" "}
                  تهران، مرکز نوآوری کسب و کار دانشگاه تهران واقع در دانشکده
                  مدیریت. (مراجعات حضوری با هماهنگی قبلی)
                </li>
                {/* <img id="jxlzjzpewlaowlaojzpejxlz" src={saman} /> */}
              </ul>
            </div>
          </div>
          <div className="right-box">
            <p className="text-right-box">
              بیت برگ (شرکت تجارت الکترونیک فرداد شریف) استارتاپی پیشرو در زمینه
              ارزهای دیجیتال است که از سال ۱۳۹۷ با هدف فراهم آوردن بستری امن و
              سریع برای خرید و فروش ارزهای دیجیتال شروع به کار کرده است.
            </p>

            

            <div className="btn-back-to-page-home">
              <a className="btn-back" href="/">
                بازگشت
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
} 
