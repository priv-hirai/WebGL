import React, { useState } from 'react';
import '../assets/scss/header.scss'


export function Header() {
    // 日付型取得
    let now = new Date();
    // 年数取得
    let year = now.getFullYear();
    // 月数取得
    let month = now.getMonth() + 1;
    // 日数取得
    let day = now.getDate();

      // 768pxにしたときにheader-bar_activeクラスを削除する
  function reportWindowSize() {
    if(window.innerWidth >= 768){
      document.getElementById("header-bar").classList.remove("header-bar_active");
    } else if(window.innerWidth <= 767 && isExpand === true) {
        document.getElementById("header-bar").classList.add("header-bar_active");
    }
  }
  window.onresize = reportWindowSize;

  const [isExpand, setIsExpand] = useState(false);

  const expandMenu = () => {
        // 展開フラグの真偽値を逆転させる
        setIsExpand(!isExpand);

        // ハンバーガーメニューボタンの変更
        document.getElementById("header-hamburgerMenu").classList.toggle("header-hamburgerMenu_active");
        // ナビゲーション開閉
        document.getElementById("header-nav").classList.toggle("header-navMenu_active");
        // ナビゲーション開閉
        document.getElementById("header-nav_overlay").classList.toggle("header-overlay_active");

        if(window.innerWidth <= 768){
          document.getElementById("header-bar").classList.toggle("header-bar_active");
        }
  };

  return (
            <header id="header" className="fixed top-0 w-full z-50">
            <div className="header-bar" id="header-bar">
              {/* 日付 */}
              <div className="mx-auto max-w-[78.125rem] px-[1.5625rem] w-full">
                <p className="header-date">
                  <span className="header-year">{year}.</span>
                  <span className="header-month_day">{month}.{day}</span>
                </p>
              </div>
            </div>
            <div id="header-hamburgerMenu" className="header-hamburgerMenu" onClick={expandMenu}>
              <span></span>
            </div>
            <nav id="header-nav" className="header-nav">
              <div className="header-navMenu">
                <ul className="header-navMenu-list">
                  <li className="header-navMenu-item" onClick={expandMenu}>
                    <a href="http://hirai.website/react/" target="_blank" rel="noreferrer"><span>Top</span></a>
                  </li>
                </ul>
              </div>
              <div id="header-nav_overlay" className="header-overlay" onClick={expandMenu}></div>
            </nav>
          </header>
    )
  }