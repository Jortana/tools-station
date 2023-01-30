import React, { ReactComponentElement } from 'react';
import { Navigate } from 'react-router-dom';

import AppFrame from '@/layout/AppFrame';
import InstagramDownload from '@/pages/InstagramDownload/InstagramDownload';

// 用于显示页面标题和鉴权
type Props = {
  title: string;
  children: ReactComponentElement;
};

const TitleAuth = ({ title, children }: Props) => {
  document.title = `${title}`;
  return <div>{children}</div>;
};

const element = [
  {
    path: '/',
    element: <AppFrame />,
    children: [
      {
        path: '/instagram',
        element: (
          <TitleAuth title="Instagram 媒体下载">
            <InstagramDownload />
          </TitleAuth>
        ),
      },
      {
        path: '/',
        element: <Navigate to="/instagram" />,
      },
    ],
  },
];

export default element;
