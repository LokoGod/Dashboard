import React from "react";

const Sidebar = () => {
  return (
    <div>
      <ul className="menu bg-base-200 w-56 rounded-box">
        <li className="menu-title">Dashi-Dasy</li>
        <li>
          <a>
            <i className="fa-regular fa-lemon"></i>
            Item 2
          </a>
        </li>
        <li>
          <details open>
            <summary>
              <i className="fa-regular fa-paper-plane"></i>
              Parent
            </summary>
            <ul>
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
              <li>
                <details open>
                  <summary>Parent</summary>
                  <ul>
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>
            <i className="fa-regular fa-handshake"></i>
            Item 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
