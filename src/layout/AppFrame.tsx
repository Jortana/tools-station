import classNames from 'classnames';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import NavMenu from '@/components/NavMenu/NavMenu';

const AppFrame = () => {
  const [isShowMenu, setIsShowMenu] = useState(false); // 移动端侧边栏是否显示

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="navbar">
          <div className="inline-flex md:hidden md:flex-none">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => {
                setIsShowMenu(!isShowMenu);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div className="flex-1">
            <Link to={'/'} className="btn btn-ghost normal-case text-xl">
              Tools Station
            </Link>
          </div>
        </div>
        <div className="flex relative flex-1">
          <div className="hidden md:block fixed h-full w-48 border-r">
            <NavMenu />
          </div>
          <div className="flex-1 md:ml-48 overflow-x-auto px-6 py-4">
            <Outlet />
          </div>
          {/* 移动端侧边栏 */}
          <>
            <div
              onClick={() => {
                setIsShowMenu(false);
              }}
              className={classNames(
                'absolute top-0  h-full bg-neutral transition-opacity',
                {
                  'opacity-0 w-0': !isShowMenu,
                  'opacity-30 w-full': isShowMenu,
                }
              )}
            ></div>
            <div
              className={classNames(
                'fixed h-full bg-base-100 overflow-hidden transition',
                {
                  '-translate-x-48': !isShowMenu,
                  'translate-x-0': isShowMenu,
                }
              )}
            >
              <NavMenu />
            </div>
          </>
        </div>
      </div>
    </>
  );
};

export default AppFrame;
