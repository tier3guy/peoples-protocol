const RequestOtp = async (aadhar) => {
  fetch("https://api.emptra.com/aadhaarVerification/requestOtp", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      secretKey:
        "9qgSqor8pybn5UoCyK9CZFnAw402TGR1pUMwc5dkS9r8AUzd5L7w48vLEf2y41PNK",
      clientId:
        "a8eedb8da2065970568a8f7efbc4e5e2:338dacbd8628991037a98aa18c771c30",
    },
    body: JSON.stringify({
      aadhaarNumber: aadhar,
    }),
  })
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      return error;
    });
};

export default RequestOtp;
