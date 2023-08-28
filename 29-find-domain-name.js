function domainName(url) {
  //your code here

  // Remove the protocol (http, https) if present
  url = url.replace(/^(https?:\/\/)?(www\d?\.)?/, "");

  // Remove any path and query parameters
  url = url.split("/")[0];

  // Remove any port number if present
  url = url.split(":")[0];

  // Remove any .net or .com etc from the domain;
  url = url.split(".")[0];
  return url;
}
