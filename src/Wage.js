import React from "react";
import Toggle from "./icons/toggle.js";
import Bitbarglogo from "./icons/Bitbarglogo.svg";
import query from "./icons/query.svg";
import currencies from "./currency.json";

export default function Wage() {
  return (
    <div>
      <header className="header" dir="rtl">
        <div className="header-button">
          <button className="btn-login"></button>
          <Toggle className="toggle" />
        </div>
        <img src={Bitbarglogo} className="Bitbarglogo-svg" />
      </header>
      <div className="container" dir="rtl">
        <div className="container-title">
          <h1>کارمزد ارزهای دیجیتال</h1>
        </div>
        <div className="main-container">
          <form>
            <div className="form1">
              <div className="input-box">
                <img src={query} className="query-svg" />
                <div className="txt-query">
                  جستجو بر اساس نام و یا نماد اختصاری
                </div>
              </div>
              <button className="btn-search">جستجو</button>
            </div>
          </form>
          <p>
            <span data-tooltip="سود بیت برگ از اختلاف قیمت در خرید و فروش حاصل می شود که با کسر هزینه های جاری نظیر سرورها، تجهیزات، پرسنل و ... تقریبا ۵۰۰۰ تومان در هر یک میلیون تومان عاید بیت برگ می شود. لازم به توضیح است ما در بیت برگ بر آنیم تا با کاهش هزینه های مذکور سود بیشتری نصیب کاربران خود نماییم.">
              توجه:
            </span>
            کارمزد های خرید همان کارمزد شبکه می باشد که توسط شبکه تعیین میشود و
            بیت برگ هیچ منفعتی در این امر ندارد، لازم به ذکر است مرجع تعیین قیمت
            کارمزدها صرافی بین المللی بایننس است.
          </p>

          <div className="title-table">
            <div className="sharp">#</div>
            <div className="currency">ارز دیجیتال</div>
            <div className="buy">کارمزد خرید</div>
            <div className="sell">کارمزد فروش</div>
          </div>
          {currencies.map((currency) => (
            <table>
              <div className="content">
                <tr>
                  <div className="currency-id">{currency.id}</div>
                </tr>
                <img src={currency.icon_url} alt="BTC" className="icons" />
                <tr>
                  <div className="currency-name-main">
                    <div className="persian-name">{currency.persian_name}</div>
                    <div className="eng-name">{currency.eng_name}</div>
                  </div>
                </tr>
                <tr>
                  <diV className="main-buy">
                    <div>
                      <span>{currency.net}</span>
                      <span>{currency.buy_net}</span>
                      <span>{currency.buy_price}</span>
                    </div>
                    <div>
                      <span>{currency.net2}</span>
                      <span>{currency.buy_net2}</span>
                      <span>{currency.buy_price2}</span>
                    </div>
                    <div>
                      <span>{currency.net3}</span>
                      <span>{currency.buy_net3}</span>
                      <span>{currency.buy_price3}</span>
                    </div>
                    <div>
                      <span>{currency.net4}</span>
                      <span>{currency.buy_net4}</span>
                      <span>{currency.buy_price4}</span>
                    </div>
                  </diV>
                </tr>
                <tr>
                  <div className="main-sell">{currency.sell}</div>
                </tr>
              </div>
            </table>
          ))}
        </div>
        <ul className="ul-next">
          <li>
            <a href="" className="ul-next-li1">
              « قبلی
            </a>
          </li>
          <li className="ul-next-li2">1 از 1</li>
          <a href="" className="ul-next-li3">
            بعدی »
          </a>
        </ul>
      </div>
    </div>
  );
}
