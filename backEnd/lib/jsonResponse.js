exports.jsonResponse = function (statuscode, body) { //es para responder cada solicitud
  return {
    statuscode,
    body: body,
  };
};