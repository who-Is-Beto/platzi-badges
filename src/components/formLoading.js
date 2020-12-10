import React from 'react';

import './styles/PageLoading.css';
import Loader from './Loader';

function Loading() {
  return (
    <div className="PageLoading">
      <Loader />
    </div>
  );
}

export default Loading;