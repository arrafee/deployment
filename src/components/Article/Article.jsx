import logoBootstrap from "../../assets/images/logo_bootstrap.png";

const Article = () => {
  return (
    <>
      <div className="text-center" style={{ padding: "50px 0" }}>
        <img src={logoBootstrap} width={72} alt="" />
        <h3 className="my-3">Create Product</h3>
        <p>
          Below is an example form built entirely with Bootstraps form controls.
          Each required form group has a validation state that can be triggered
          by attempting to submit the form without completing it.
        </p>
      </div>
    </>
  );
};

export default Article;
