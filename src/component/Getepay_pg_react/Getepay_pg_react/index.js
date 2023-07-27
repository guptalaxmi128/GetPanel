import encryptEas from "./components/encryptEas";
import decryptEas from "./components/decryptEas";

const getepayPortal = (data, config) => {
  const JsonData = JSON.stringify(data);
  // console.log(JsonData)
  // console.log(config)

  var ciphertext = encryptEas(
    JsonData,
    config["Getepay Key"],
    config["Getepay IV"]
  );
  var newCipher = ciphertext.toUpperCase();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    mid: data.mid,
    terminalId: data.terminalId,
    req: newCipher,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  //  console.log (config["Getepay Url"])
  fetch(config["Getepay Url"], requestOptions)
    .then((response) => response.text())
    .then((result) => {
      var resultobj = JSON.parse(result);
      var responseurl = resultobj.response;
      var dataitem = decryptEas(
        responseurl,
        config["Getepay Key"],
        config["Getepay IV"]
      );
      dataitem = JSON.parse(dataitem);
      // console.log(dataitem)
      window.location.href = dataitem.paymentUrl;
    })
    .catch((error) => console.log("error", error));
};

export default getepayPortal;
