/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './toast.component.css';
import { closeToast } from '../../actions/toast.action';

const ToastComponent = ({ toast }) => {
  const ref = useRef();

  const { hide } = toast;
  const [localHide, setLocalHide] = useState(toast.hide);

  const dispatch = useDispatch();
  const close = () => {
    dispatch(closeToast(toast));
  };
  const click = () => {
    if (toast.closeOnClick) {
      close();
    }
  };

  useEffect(() => {
    if (hide) {
      const h = ref.current.offsetHeight;
      ref.current.style.height = `${h} px`;
      setTimeout(() => setLocalHide(true), 100);
    }
  }, [hide]);

  const ChildComponent = toast.component;
  const content = ChildComponent ? <ChildComponent close={close} toast={toast} /> : (toast.text || toast.children);
  const style = {};
  if (localHide) {
    style.height = '0px';
  }
  return (
    <div ref={ref} style={style} className={`toast-container${toast.noStyle ? '' : ' do-style'}${localHide ? ' hide' : ''}`}>
      <div role="button" className={toast.variant ? `variant-${toast.variant}` : ''} onClick={click} tabIndex="0">
        {content}
      </div>
    </div>
  );
};

const ToastsComponent = () => {
  const { toasts } = useSelector((state) => state.toast);

  if (!toasts.length) {
    return null;
  }
  return (
    <div className="toasts-container">
      {
        toasts.map((toast) => <ToastComponent key={toast.id} toast={toast} />)
      }
    </div>
  );
};

export default ToastsComponent;
