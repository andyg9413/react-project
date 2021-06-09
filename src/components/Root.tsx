import Header from "./Header";


const Root = (props: any): JSX.Element => {
    return (
      <div className="container">
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  <Header />
              </div>
          </div>
          <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                  {props.children}
              </div>
          </div>
      </div>
    );
};

export default Root;