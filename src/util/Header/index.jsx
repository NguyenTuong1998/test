import React, { Component } from "react";
import responHeader from "../../asset/menu-options.png";
class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md position-relative bg-dark">
          <a href="#">
            <span>CyberPhim</span>
          </a>
          <div className="content">
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#showtimes">
                    Lịch chiếu
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Cụm rạp
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Tin tức
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="login">
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li className="nav-item active first">
                  <a className="nav-link" href="#">
                    <i className="fa fa-user-circle" /> Đăng nhập | Đăng Ký
                  </a>
                </li>
                {/* <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="fa fa-map-marker-alt" /> Hồ Chí Minh
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Hà Nội
                    </a>
                    <a className="dropdown-item" href="#">
                      Đà Nẵng
                    </a>
                    <a className="dropdown-item" href="#">
                      Hội An
                    </a>
                    <a className="dropdown-item" href="#">
                      Vũng Tàu
                    </a>
                    <a className="dropdown-item" href="#">
                      Cần Thơ
                    </a>
                    <a className="dropdown-item" href="#">
                      Biên Hòa
                    </a>
                    <a className="dropdown-item" href="#">
                      Nha Trang
                    </a>
                    <a className="dropdown-item" href="#">
                      Phan Thiết
                    </a>
                    <a className="dropdown-item" href="#">
                      Hạ Long
                    </a>
                    <a className="dropdown-item" href="#">
                      Bình Dương
                    </a>
                    <a className="dropdown-item" href="#">
                      Phú Yên
                    </a>
                  </div>
                </li> */}
              </ul>
            </div>
            {/* Toggler/collapsibe Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <img src={responHeader} width={30} alt />
            </button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
