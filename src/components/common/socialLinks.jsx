const SocialLinks = (props) => {
  return (
    <div className="social">
      {props.socialLink.map((item) => (
        <a key={item.to} href={item.to} target="_blank" rel="noreferrer" className="social__link">
          <i className={item.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
