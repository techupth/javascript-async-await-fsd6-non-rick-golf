// Exercise #5
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
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
    try {
      const getData = await getJohnProfile()
    } catch (error) {
      console.log(error)
    }
}
getProfile();