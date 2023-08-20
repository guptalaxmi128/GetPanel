import encryptEas from "./components/encryptEas";
import decryptEas from "./components/decryptEas";

const getepayPortal = (data, config, studentName, studentUID,studentRaiseFundCourseId,panNumber) => {
  const updatedData = {
    ...data,
    udf3: studentUID,
    udf4: studentName,
    udf5:studentRaiseFundCourseId,
    udf6:panNumber
  };
  const JsonData = JSON.stringify(updatedData);
  // console.log(JsonData);
  var ciphertext = encryptEas(
    JsonData,
    config["Getepay Key"],
    config["Getepay IV"]
  );
  // console.log(ciphertext)
  var newCipher = ciphertext.toUpperCase();

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    mid: data.mid,
    terminalId: data.terminalId,
    req: newCipher,
  });

  // console.log(raw);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch(config["Getepay Url"], requestOptions)
    .then((response) => response.text())
    .then((result) => {
      var resultobj = JSON.parse(result);
      // console.log(resultobj)
      var responseurl = resultobj.response;

      var dataitem = decryptEas(
        responseurl,
        config["Getepay Key"],
        config["Getepay IV"]
      );
      dataitem = JSON.parse(dataitem);
      window.location.href = dataitem.paymentUrl;
    })
    .catch((error) => console.log("error", error));
};

export default getepayPortal;
