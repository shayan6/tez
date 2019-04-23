import React from "react";

function Partners(props) {
  const {
    easypaisa,
    omni,
    simsim,
    datalift,
    venturedive,
    jublee,
    efu,
    tpl
  } = props.img;

  const partners = [
    { name: "datalift", src: datalift },
    { name: "jublee", src: jublee },
    { name: "easypaisa", src: easypaisa },
    { name: "venturedive", src: venturedive },
    { name: "tpl", src: tpl },
    { name: "omni", src: omni },
    { name: "efu", src: efu },
    { name: "simsim", src: simsim }
  ];

  return (
    <section className="bgGrey">
      <div className="box" id="wrapper">
        <h3 style={{ fontVariantCaps: "small-caps", color: "#1c6fb5", textAlign: "center" }}>
          Our Partners
        </h3>
        <hr className="hrDividerCenter" /><br/>
        <div id="list">
          {partners.map((el, key) => (
            <div class="item" key={key}>
              <img src={el.src} alt={el.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
