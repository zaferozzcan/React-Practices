ReactDOM.render(
  <div>
  <h1 className="heading" style={customStyle}>
    {greeting}
  </h1>

  <Card
    name = "Beyonce"
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    phone = "+123456789"
    email = "b@ksakl.com"

   />

  </div>,
  document.getElementById("root")
);
