import React from 'react';
import { Button, Result } from 'antd';

const hanleClick = () => {
  window.location.href = '/';
}

const Upcoming = () => (
  <Result
    title="Oppss..."
    subTitle="Xin lỗi bạn, nội dung đang được cập nhật. Vui lòng quay lại sau!"
    extra={<Button type="primary" onClick={hanleClick}>Quay lại trang chủ</Button>}
  />
);

export default Upcoming;