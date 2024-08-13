function ExsBtn({
  bgColor,
  width,
  height,
  color,
  padding,
  text,
  onHendle,
  fontSize,
  fontWeight,
}) {
  return (
    <>
      <button
        style={{
          backgroundColor: bgColor,
          width: width,
          height: height,
          color: color,
          padding: padding,
          fontSize: fontSize,
          fontWeight: fontWeight,
        }}
        onClick={onHendle}
      >
        {text}
      </button>
    </>
  );
}
export default ExsBtn;
