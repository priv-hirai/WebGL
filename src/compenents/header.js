




export function Header() {
    return (
            <header id="header" className="fixed top-0 w-full z-50">
            <div className=" bg-white h-[4.375rem] opacity-[0.95] w-full" id="header-bar">
              {/* 日付 */}
              <div className="mx-auto max-w-[78.125rem] px-[1.5625rem] w-full">
                <p className="flex items-center h-[4.375rem] pl-[.75rem]">
                  <span className="header-year text-[1.5625rem]">2022.</span>
                  <span className="header-month_day text-[3rem] ml-[.375rem]">10.22</span>
                </p>
              </div>
            </div>
            <div id="header-hamburgerMenu" className="header-hamburgerMenu fixed right-0 top-0 w-[4.375rem] h-[4.375rem] bg-[#004c71] z-50">
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