import "../CSS/project.css";
function Project() {
  return (
    <div className="layoutProject">
      <div className="edu">
        <h2 className="title">DỰ ÁN</h2>
        <div className="flex project">
          <div className="boxTitle">
            <h3>App movie</h3>
            <p>Link Demo: </p>
            <a href="https://appmovie-react-demo.web.app/" target="_blank">
              https://appmovie-react-demo.web.app/
            </a>
          </div>
          <div className="boxInfo">
            <h3>LẬP TRÌNH VIÊN</h3>
            <p>các công nghệ sử dụng :</p>
            <p>-HTML, CSS, JavaScript, ReactJs</p>
            <p>-NodeJs, RestAPI</p>
            <p>-Link Source code : </p>
            <a
              href="https://github.com/phongtrgg/web-Movie"
              target="_blank"
            >
              https://github.com/phongtrgg/web-Movie
            </a>
          </div>
        </div>
        <div className="flex project">
          <div className="boxTitle">
            <h3>App booking</h3>
            <p>Link Demo: </p>
            <a href="https://test-app-booking.web.app/" target="_blank">
              https://test-app-booking.web.app/
            </a>
          </div>
          <div className="boxInfo">
            <h3>LẬP TRÌNH VIÊN</h3>
            <p>các công nghệ sử dụng :</p>
            <p>-HTML, CSS, JavaScript, ReactJs</p>
            <p>-NodeJs, RestAPI, MongooDb</p>
            <p>-Link Source code : </p>
            <a
              href="https://github.com/phongtrgg/web-booking"
              target="_blank"
            >
              https://github.com/phongtrgg/web-booking
            </a>
          </div>
        </div>
        <div className="flex project">
          <div className="boxTitle">
            <h3>App shoporder</h3>
            <p>Link Demo: </p>
            <a href="https://frontend-asm3-node.web.app/" target="_blank">
              https://frontend-asm3-node.web.app/
            </a>
          </div>
          <div className="boxInfo">
            <h3>LẬP TRÌNH VIÊN</h3>
            <p>các công nghệ sử dụng :</p>
            <p>-HTML, CSS, JavaScript, ReactJs</p>
            <p>-NodeJs, RestAPI, MongooDb</p>
            <p>-Link Source code : </p>
            <a
              href="https://github.com/phongtrgg/web-shoporder"
              target="_blank"
            >
              https://github.com/phongtrgg/web-shoporder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
