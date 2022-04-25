const BASE_URL = "https://app-countries-dreck.herokuapp.com";

/**
 * REceived features (datatables), callback
 * @param {} features
 * @param {*} callback
 */
export const fetchActivity = async (features, callback) => {
  console.log("Los features: ", features);
  try {
    const response = await fetch(`${BASE_URL}/api/activities`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(features),
    });

    const data = await response.json();
    if (data.error) {
      alert(data.error);
    } else {
      callback(data);
    }
  } catch (error) {
    console.log("ERROR EN FETCH ACTIVITY: ", error);
  }
};
