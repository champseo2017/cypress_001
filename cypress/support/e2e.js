// ***********************************************************
// ไฟล์นี้จะถูกโหลดก่อนที่ไฟล์ทดสอบจะทำงาน
// คุณสามารถใส่โค้ดที่ต้องการให้ทำงานก่อนการทดสอบทุกครั้งที่นี่
// ***********************************************************

// นำเข้าคำสั่งทั้งหมด
import './commands';

// ถ้าต้องการปิดการแสดง XHR Requests ในหน้า Command Log
// uncomment บรรทัดด้านล่าง
// const app = window.top;
// if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
//   const style = app.document.createElement('style');
//   style.innerHTML =
//     '.command-name-request, .command-name-xhr { display: none }';
//   style.setAttribute('data-hide-command-log-request', '');
//   app.document.head.appendChild(style);
// } 