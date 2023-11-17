import Input from "../Form/components/Input";
import "./index.css";

const Newsletter = () => {
  return (
    <>
      <div className="section-1">
        <div className="join">
          <p className="join-title">Join Our Newsletter</p>
          <p className="join-desc">
            Tamen quem nulla quae legam multos aute sint culpa legam noster
            magna
          </p>
          <div className="form">
            <form action="" method="post">
              <input type="text" className="form-control" />
              <button type="submit" name="subscribe" className="btn-subscribe">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
