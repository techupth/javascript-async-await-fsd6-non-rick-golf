// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

const getProfile = async() => {
    const errorMessage = await getJohnProfile()
    console.log(errorMessage)
}
getProfile();