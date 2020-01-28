const TitleReducer = title => {
  return title.length > 15
    ? title
        .split("")
        .slice(0, 15)
        .join("") + "..."
    : title;
};

const DescReducer = title => {
  return title.length > 30
    ? title
        .split("")
        .slice(0, 30)
        .join("") + "..."
    : title;
};

const ByteFormatter = bytes => {
  let sizes = ["B", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
};

const GetTopRepos = arr => {
    return (arr.length > 0) ? (arr.sort((a,b) => (a.size < b.size) ? 1 : -1)) : []
}

export { TitleReducer, DescReducer, ByteFormatter, GetTopRepos };


