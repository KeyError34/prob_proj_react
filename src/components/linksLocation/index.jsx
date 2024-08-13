
function LinksLocation({ mockLinksLocation, }) {
  return (
    <>
      {mockLinksLocation.map((el, ind) => (
        <a key={ind} href={el.url}>
          {el.locName}
        </a>
      ))}
    </>
  );
}
export default LinksLocation;
