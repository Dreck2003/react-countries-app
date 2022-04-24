/**
 * REceived features (datatables), callback
 * @param {} features
 * @param {*} callback
 */
export const fetchActivity = async (features, callback) => {
  try {
    const response = await fetch("http://localhost:3001/api/activities", {
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
