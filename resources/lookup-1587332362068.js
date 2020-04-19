(function(window, undefined) {
  var dictionary = {
    "171118b0-617c-420d-a4bc-d609af71ae86": "llamada",
    "7787879a-ae75-4755-9640-9e80f33c8375": "Doctor personal",
    "3a97fccf-50ff-43c4-9d70-4d2856b99c67": "Menu",
    "684aa729-614c-4a03-a17d-092cce447581": "Doctores",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main",
    "82fce0b7-1c36-4036-8986-15a94b786570": "Ubicacion",
    "c88ff36d-f41f-45b1-84ed-4414714e311a": "Sign in",
    "f3088fd5-7f83-4334-9230-6849347d32b3": "Citas",
    "4f86cdf8-b1a3-45cd-9f8c-69a91368bfef": "receta",
    "492fd5ad-c083-478a-b6be-4606581c030e": "chat",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);