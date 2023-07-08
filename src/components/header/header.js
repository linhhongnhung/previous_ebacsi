import React from "react";

const TabItem = (props) => {
  const {content} = props

  return (
    <li className="text-primary">
      <a href="gioi-thieu.html">{content}</a>
    </li>
  );
};

const TabList = [
  {
    text: "GIỚI THIỆU"
  },
  {
    text: "CÁC GÓI DỊCH VỤ Y TẾ"
  },
  {
    text: "TIN TỨC"
  },
  {
    text: "NHẬN ĐĂNG KÝ TƯ VẤN"
  },
  {
    text: "shopping_cart"
  },
]

export function Header() {
  return (
    <header
      id="header"
      className="fixed inset-x-0 top-0 items-center bg-white h-32 flex flex-row"
    >
      <a href="index.html">
        <img src="/imgs/logo.png" alt="logo" />
      </a>

      <nav>
        <ul className="text-black29 flex gap-2">
            {TabList.map((item,index) => {
              return <TabItem key={index} content={item.text} />
            })}
          
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </header>
  );
}
