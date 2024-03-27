const Map = ({ geo }) => {
  return (
    <iframe
      title="Map Location"
      width="100%"
      height="150"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src={`https://www.openstreetmap.org/export/embed.html?bbox=${
        parseFloat(geo?.lng) - 0.01
      }%2C${parseFloat(geo?.lat) - 0.01}%2C${parseFloat(geo?.lng) + 0.01}%2C${
        parseFloat(geo?.lat) + 0.01
      }&layer=mapnik&marker=${geo?.lat}%2C${geo?.lng}`}
    />
  );
};

export default Map;
