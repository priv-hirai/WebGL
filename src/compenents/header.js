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
            <div id="header-hamburgerMenu" className="header-hamburgerMenu">
              <span></span>
            </div>
            <nav id="header-nav" className="header-nav">
              <div className="header-navMenu">
                <ul className="header-navMenu-list">
                  <li className="header-navMenu-item">
                    <a href="http://hirai.website/react/" target="_blank" rel="noreferrer"><span>Top</span></a>
                  </li>
                </ul>
              </div>
              <div id="header-nav_overlay" className="header-overlay"></div>
            </nav>
          </header>
    )
  }