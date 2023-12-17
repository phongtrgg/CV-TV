import "../CSS/content.css";

function Content1() {
  return (
    <>
      <div className="layoutContent">
        <div className="edu">
          <h2 className="title">HỌC VẤN</h2>
          <div className="boxEdu">
            <h3>Japanese language Yoko center</h3>
            <p>Japanese language</p>
            <p>Jan 2016 - Oct 2018</p>
          </div>
          <div className="boxEdu">
            <h3>Funix Academy</h3>
            <p>Web Fullstack Developer</p>
            <p>Jan 2023 - Dec 2023</p>
          </div>
        </div>
        <div className="skill">
          <h2 className="title">KỸ NĂNG CHUYÊN MÔN</h2>
          <div className="boxSkill">
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, ReactJs, Bootstrap</p>
          </div>
          <div className="boxSkill">
            <h3>Backend</h3>
            <p>NodeJs, MySql, MongoDB, RestAPI</p>
          </div>
        </div>
      </div>
      <div className="layoutExp">
        <div className="exp">
          <h2 className="title">KING NGHIỆM LÀM VIỆC</h2>
          <div className="boxExp">
            <div className="nameExp">
              <h3>BigC Long Bien</h3>
              <p>Aug 2016 - Oct 2018</p>
            </div>
            <div className="infoExp">
              <h3>PART-TIME nhân viên bán hàng</h3>
              <p>-Bán hàng cho người nước ngoài và người Việt Nam</p>
            </div>
          </div>
          <div className="boxExp">
            <div className="nameExp">
              <h3>Tra Viet Shop</h3>

              <p>Jan 2019 - Sep 2021</p>
            </div>
            <div className="infoExp">
              <h3>nhân viên bán hàng</h3>
              <p>-Bán hàng cho người nước ngoài và người Việt Nam</p>
              <p>-Quảng cáo sản phẩm trên các ấn phẩm truyền thông</p>
              <p>-Lập báo cáo doanh số mỗi ngày</p>
            </div>
          </div>
          <div className="boxExp">
            <div className="nameExp">
              <h3>Ajisai Japan Shop</h3>

              <p>Oct 2021 - Dec 2023</p>
            </div>
            <div className="infoExp">
              <h3>nhân viên bán hàng</h3>
              <p>-Bán hàng cho người nước ngoài và người Việt Nam</p>
              <p>-Quảng cáo sản phẩm trên các ấn phẩm truyền thông</p>
              <p>-Lập báo cáo doanh số mỗi ngày</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Content1;
