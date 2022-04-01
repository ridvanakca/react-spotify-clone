import { Icon } from 'Icons';
import React from 'react';

function DownloadApp() {
  return (
    <a  href='#' className='h-10 flex items-center text-sm font-semibold text-link hover:text-white flex-shrink-0 gap-x-4 px-6'>
        <Icon name='download' size={20} />
        Uygulamayı Yükle
    </a>
  )
}

export default DownloadApp